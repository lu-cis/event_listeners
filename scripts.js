$(`#submit`).click(() => {
    console.log(`Yeah, you clicked me`)
})

$(`#change_text`).click(() => {
    $(`#submit`).text(`YOU CLICKED ON IT!`)
})

$('#color').one('click',function(){
    $(`#change_background`).one(`click`,() => {
        $(`button`).css(`background`,$(this).val());
        $(`#ups_text`).html(`Ups, you can change it only once...`)})
   })
