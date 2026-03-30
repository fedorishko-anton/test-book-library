<?php

namespace App\Docs\Schemas;

use OpenApi\Attributes as OA;

#[OA\Schema(
    schema: "Book",
    title: "Book",
    description: "Book model",
    type: "object",
    properties: [
        new OA\Property(property: "id", type: "integer", example: 1),
        new OA\Property(property: "title", type: "string", example: "Alias esse a officiis. asd"),
        new OA\Property(property: "author", type: "string", example: "Charity Kutch I"),
        new OA\Property(property: "genre", type: "string", example: "dolores"),
        new OA\Property(property: "publisher", type: "string", example: "Langworth and Sons"),
        new OA\Property(property: "publication_date", type: "string", format: "date", example: "1973-06-29"),
        new OA\Property(property: "price_usd", type: "number", format: "float", example: 54.46),
        new OA\Property(property: "word_count", type: "integer", example: 44173),
        new OA\Property(property: "created_at", type: "string", format: "date-time", example: "2026-03-30T12:00:00Z"),
        new OA\Property(property: "updated_at", type: "string", format: "date-time", example: "2026-03-30T12:00:00Z"),
    ]
)]
class BookSchema {}