function id(id) {
    return document.getElementById(id)
}

id('btn').addEventListener('click',(e)=>{
    e.preventDefault()

    const uid = id('uid').value

    function isANumber(str){
        return !/\D/.test(str);
    }
    if (isANumber(uid)) {

        fetch('https://banquaapi.herokuapp.com/',{
            body: JSON.stringify({"uid":uid}),
            method: "post"
        })
        .then((data)=>data.json())
        .then((data)=>{
            if (data.result.length > 0) {

                console.log(data.result[0])
                
                
                id('formbox').style.display = 'none'

                id('dashboard').style.display = "block"
                
                id("xn").innerText = data.result[0].name

                id("n").innerText = data.result[0].name
                id("i").innerText = data.result[0].userId
                id("u").innerText = data.result[0].username || 'not set'
                id('r').innerText = data.result[0].ref_by
                id('rc').innerText = data.result[0].ref_count


                id('mw').innerText = data.result[0].my_wallet || '0'
                id('rp').innerText = data.result[0].reward_per || '0'
                id('rw').innerText = data.result[0].reward || '0'
                id('tmw').innerText = data.result[0].today_wallet || '0'


            } else {
                alert("User not found")
            }
        })
        .catch((e)=>console.log(e))

    } else {
        alert('Please type a valid user id')
    }

})