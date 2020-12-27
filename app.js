const cloud = [document.querySelector(".cloud"), 
document.querySelector(".cloud1"),
document.querySelector(".cloud2"),
document.querySelector(".eagle"),
document.querySelector(".sparrow"),
document.querySelector(".plane"),
document.querySelector(".bar1"),


]
// const plane = 


const clouds = [
    {
        id:'cloud',
        frame: [
            { transform: 'translateX(10vw)', opacity: 0.3 },
            { transform: 'translateX(-100vw)', opacity: 1 },
        ],
        timing: {
            duration: 10000,
            iterations: Infinity,
        }
    },
    {
        id:'cloud1',
        frame: [
            { transform: 'translateX(5vw)', opacity: 0.4 },
            { transform: 'translateX(-100vw)', opacity: 1 },
        ],
        timing: {
            duration: 10000,
            iterations: Infinity,
        }
    },{
        id:'cloud2',
        frame: [
            { transform: 'translateX(15vw)', opacity: 0.4 },
            { transform: 'translateX(-90vw)', opacity: 1 },
        ],
        timing: {
            duration: 10000,
            iterations: Infinity,
        }
    },
    {
        id:'eagle',
        frame: [
            { transform: 'translateX(5vw)', opacity: 1 },
            { transform: 'translateX(0vw)', opacity: 1 },
        ],
        timing: {
            duration: 20000,
            iterations: Infinity,
        }
    },{
        id:'sparrow',
        frame: [
            { transform: 'translateX(25vw)', opacity: 1 },
            { transform: 'translateX(-22vw)', opacity: 1 },
        ],
        timing: {
            duration: 20000,
            iterations: Infinity,
        }
    },
    {
        id:'plane',
        frame: [
            { transform: 'translate(0px, 20px)', opacity: 1 },
            { transform: 'translate(500px, 720px)', opacity: 1 },
            { transform: 'translate(800px, 720px)', opacity: 1 },

        ],
        timing: {
            duration: 16000,
            iterations: Infinity,
        }
    },
    {
        id:'bar1',
        frame: [
            { transform: 'translateX(10px)', opacity: 1 },
            { transform: 'translateX(-100vw)', opacity: 1 },
            
        ],
        timing: {
            duration: 16000,
            iterations: Infinity,
        }
    },

clouds.map((obj, index)=>{
    cloud[index].animate(obj.frame, obj.timing)
})