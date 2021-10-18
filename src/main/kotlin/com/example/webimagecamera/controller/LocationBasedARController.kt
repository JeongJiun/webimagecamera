package com.example.webimagecamera.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class LocationBasedARController {

    @RequestMapping("/locationbasedindex")
    fun index(): String {
        return "locationbasedindex.html"
    }
}