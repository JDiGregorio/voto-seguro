<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Centro extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'centros';

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'nombre',
        'direccion',
        'coordinador_id',
        'categoria'
    ];
}
