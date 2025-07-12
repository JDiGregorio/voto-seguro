<?php


use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\MovilizadorLoginController;
use App\Http\Controllers\VotanteController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login')
    ]);
});

Route::get('/movilizador-login', function () {
    return Inertia::render('Auth/MovilizadorLogin', [
        'canLogin' => Route::has('movilizador.login'),
    ]);
})->name('movilizador.login');

Route::post('/movilizador-login', [MovilizadorLoginController::class, 'store'])->name('movilizador.login.store');

Route::get('/invitados', function () {
    return Inertia::render('Voters/GuestVoter');
})->name('invitados');

Route::post('/invitados', [VotanteController::class, 'storeInvitado'])->name('invitados.store');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/perfil', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/perfil', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/perfil', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/votantes', function () {
        return Inertia::render('Voters/IndexVoters');
    })->name('votantes');

    Route::get('/votantes/crear', function () {
        return Inertia::render('Voters/CreateVoter');
    })->name('crear-votante');
    Route::post('/votantes/crear', [VotanteController::class, 'store'])->name('votantes.store');

    Route::get('/centros', function () {
        return Inertia::render('Centers/IndexCenter');
    })->name('centros');

    Route::get('/usuarios', function () {
        return Inertia::render('Users/IndexUser');
    })->name('usuarios');

    Route::get('/roles', function () {
        return Inertia::render('Roles/IndexRole');
    })->name('roles');
});

require __DIR__.'/auth.php';
