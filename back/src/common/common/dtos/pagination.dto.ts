import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsInt, IsOptional, Min } from "class-validator"


export class PaginationDto{
    
    @ApiProperty({
        default: 0,
        description: 'Page to show'
    })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(0)
    page?: number = 0;

    @ApiProperty({
        default: 10,
        description: 'How many rows do you need'
    })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    limit?: number = 10;

    get skip(): number {
        return (this.page - 1) * this.limit;
    }
}