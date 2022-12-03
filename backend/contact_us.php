<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400'); 

    function check_input($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        $data=ucwords($data);
        if ($data=="" || $data==null) {
            $data="Not Avilable";
        }
        return $data;
    }
        
    if(isset($_POST['name']) && !empty($_POST['name']) && isset($_POST['email']) 
    && !empty($_POST['email']))
    {
        include('./config.php');
        
        $name=check_input($_POST['name']);
        $emial=check_input($_POST['email']);
        $phone=check_input($_POST["phone"]);
        $subject=check_input($_POST["subject"]);
        $message=check_input($_POST["message"]);
       
        $stmt="INSERT INTO `contact_us` (name,email,phone,subject,message) VALUES (?,?,?,?,?)";
        $sql = mysqli_prepare($conn, $stmt);
        mysqli_stmt_bind_param($sql, 'sssss', $name,$email,$phone,$subject,$message);
        $result=mysqli_stmt_execute($sql);
        if($result)
        {
            mysqli_stmt_close($sql); 
            mysqli_close($conn);
            $data = "Successfully data inserted.";
            // header('Content-Type: application/json; charset=utf-8');
             http_response_code(200);
            echo json_encode($data);
        } 
        else
        {
           
            $data = mysqli_error($conn);
            //  $data = "Something went wrong.";
            // header('Content-Type: application/json; charset=utf-8');
             mysqli_stmt_close($sql);
             mysqli_close($conn);
            http_response_code(500);
            echo json_encode($data);
        }
    }
    else{
        $data = "Please fill all the details";
        
        // header('Content-Type: application/json; charset=utf-8');
        http_response_code(500);
        echo json_encode($data);
    }
?>