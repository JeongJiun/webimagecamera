package com.example.webimagecamera.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping

@Controller
@RequestMapping("")
class MarkerBasedARController {

    @GetMapping("/markerBasedindex")
    fun index(): String {
        return "markerbasedindex.html"
    }
}