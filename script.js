const form=document.querySelector('form')
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
      const h=  parseInt(document.querySelector('#h').value)
      const w=parseInt(document.querySelector('#w').value)
        const res=document.querySelector('#res')
      if(h==='' || h<0 || isNaN(h)){
        res.innerHTML=`please give a valid height :${h}`
      }
      else if(w==='' || w<0 || isNaN(w)){
        res.innerHTML=`please give a valid weight :${w}`
      }
      else{
        const bmi=(w/((h*h)/10000)).toFixed(2)
        res.innerHTML=`<span>${bmi}</span>`
        if(bmi<18.5){
            res.innerHTML=`Your BMI is:${bmi} UnderWeight`
        }
        else if(bmi>18.5 && bmi<24.9){
            res.innerHTML=`Your BMI is:${bmi} HealthyWeight`
        }
        else if(bmi>25 && bmi<29.9){
            res.innerHTML=`Your BMI is:${bmi} OverWeight`
        }
        
      }

      

    })