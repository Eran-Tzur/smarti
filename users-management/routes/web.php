<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('add-user', 'userController@addUser');

Route::get('get-users', 'userController@getUsers');

Route::post('delete-user', 'userController@deleteUser');

Route::get('get-user/{id}', 'userController@getUser');

Route::post('update-user', 'userController@updateUser');