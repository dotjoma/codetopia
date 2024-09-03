<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ReactController extends Controller
{
    public function home()
    {
        return Inertia::render('React/Home');
    }

    public function installation()
    {
        return Inertia::render('React/GetStarted/Installation');
    }
}
