package com.example.webimagecamera.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class CameraFaceAppController {

    @RequestMapping("/faceappindex")
    fun faceappindex(): String {
        return "faceappindex.html"
    }

    @RequestMapping("/camImg")
    fun camImg(): String {
        return "camImg.html"
    }

    @RequestMapping("/over")
    fun over(): String {
        return "over.html"
    }
}