const container = document.querySelector(".container");
// container.style.maxHeight = `${window.innerHeight - 21.5 - 8}px`;
let pixel_choice;

const choice_button = document.querySelector('button');
choice_button.addEventListener('click', () => {
        pixel_choice = prompt("How many pixels wide you want it to be?");
        pixel_choice = Number(pixel_choice);
        if (pixel_choice > 100) {
            pixel_choice = prompt("Please enter a valid number between 1-100.");
        }
        let buttons = document.querySelectorAll('.block');
        buttons.forEach(button => button.remove());

        if (pixel_choice) {
            for (let i = pixel_choice * pixel_choice; i > 0; i--) {
                const block_div = document.createElement("div");
                block_div.className = "block";
            
                let padding_value = `calc(350px / ${pixel_choice})`;
                block_div.style.padding = padding_value;
        
                let flex_basis = `calc(350px / ${pixel_choice})`;
                console.log(flex_basis);
                block_div.style.flexBasis = flex_basis;
            
                block_div.addEventListener('mouseover', () => {
                    block_div.style.backgroundColor = "black";
                })
            
                // block_div.addEventListener('mouseout', () => {
                //     block_div.style.backgroundColor = "blue";
                // })
            
                container.appendChild(block_div);
            }
            pixel_choice = 0;
                
            };
}); 



