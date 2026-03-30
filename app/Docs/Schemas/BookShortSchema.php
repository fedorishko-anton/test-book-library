<?php

namespace App\Docs\Schemas;

use OpenApi\Attributes as OA;

#[OA\Schema(
    schema: "BookShort",
    title: "BookShort",
    description: "Simplified book model with id and title",
    type: "object",
    properties: [
        new OA\Property(property: "id", type: "integer", example: 8),
        new OA\Property(property: "title", type: "string", example: "Corrupti et est doloremque.")
    ]
)]
class BookShortSchema {}