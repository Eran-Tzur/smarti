<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\user;
use DB;

class userController extends Controller
{
    function addUser(Request $request){
        $name = $request->input('name');
        $email = $request->input('email');
        $user = new user();
        $user->name = $name;
        $user->email = $email;
        $user->save();
        return $user;
    }

    function getUsers(){
        $records = user::all();
        return response()->json($records);
    }

    function deleteUser(Request $request){
        $id = $request->input('id');
        $record = DB::delete("DELETE FROM users WHERE id='$id'");
        $response = array('id'=>$id);
        return $response;
    }

    function getUser($id){
        $record = user::find($id);
        return response()->json($record);
    }

    function updateUser(Request $request){
        $user = user::find($request['id']);
        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->save();
        return $user;
    }
}