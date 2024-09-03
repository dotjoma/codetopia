<?php

use App\Http\Controllers\ReactController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/react', [ReactController::class, 'home'])->name('react');

Route::get('/react/getstarted/installation', [ReactController::class, 'installation'])->name('react.installation');
