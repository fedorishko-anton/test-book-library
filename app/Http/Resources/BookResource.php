<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    public static $wrap = null; // 👈 disables wrapping
    
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    
    public function toArray(Request $request): array
    {
        return [
            'id'    => $this->id,
            'title'  => $this->title,
            'publisher' => $this->publisher,
            'author' => $this->author,
            'genre' => $this->genre,
            'publication_date' => $this->publication_date,
            'word_count' => $this->word_count,
            'price_usd' => $this->price_usd
        ];
    }
}
