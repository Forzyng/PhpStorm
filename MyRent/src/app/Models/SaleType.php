<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Facades\Voyager;

class SaleType extends Model
{
    use HasFactory;

    protected $table = 'sale_types';

    protected $fillable = ['slug', 'name'];

    protected $guarded = [];

    public function posts()
    {
        return $this->hasMany(Voyager::modelClass('Post'));
    }

}
