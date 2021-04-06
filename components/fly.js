AFRAME.registerComponent("move",{
    schema:{
        moveZ :{type:"number",default:1}
    },
    tick: function(){
        pos = this.el.getAttribute("position")
        this.data.moveZ = this.data.moveZ-0.001
        pos.z= this.data.moveZ
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
})