
import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsInt } from "class-validator"


export class GetResponseDto<T>{
    
    @ApiProperty({
        default: 2,
        description: 'How many rows exist in database'
    })
    @Type(() => Number)
    @IsInt()
    count?: number;

    @ApiProperty({
        description: 'result',
        example: [
            {
                "id": 1,
                "name": "Hotel A",
                "address": "123 Main St, City A",
                "phone": "123-456-7890",
                "email": "hotelA@example.com",
                "stars": 4,
                "features": [
                  {
                    "id": 1,
                    "name": "Pool",
                    "description": "Outdoor swimming pool"
                  },
                  {
                    "id": 2,
                    "name": "Gym",
                    "description": "Fully equipped gym"
                  }
                ],
                "media": [
                  {
                    "id": 3,
                    "url": "https://image.jpg",
                    "hotelId": 1
                  },
                ]
              },
              {
                "id": 2,
                "name": "Hotel B",
                "address": "456 Elm St, City B",
                "phone": "987-654-3210",
                "email": "hotelB@example.com",
                "stars": 5,
                "features": [
                  {
                    "id": 2,
                    "name": "Gym",
                    "description": "Fully equipped gym"
                  }
                ],
                "media": [
                  {
                    "id": 2,
                    "url": "https://image.jpg",
                    "hotelId": 2
                  }
                ]
              }
        ]
    })
    results: T[];
}