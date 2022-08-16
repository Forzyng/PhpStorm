<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\SaleType;

class Post extends \TCG\Voyager\Models\Post
{
    use HasFactory;
    use Sluggable;

    protected $guarded = [];

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    public function sale_type()
    {
        return $this->belongsTo(SaleType::class);
    }
}
