"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const patches = document.querySelectorAll('.patch');
    patches.forEach(patch => {
        const morebtn = patch.querySelector('.more-button');
        const patchdesc = patch.querySelector('.patch-desc-text');
        const ul = patch.querySelector('ul.patch-desc-text');

        patch.addEventListener('click', () => {
            document.querySelectorAll('.patch-desc-text').forEach(item => {
                if (item !== patchdesc) item.style.display = 'none';
            });
            morebtn.style.transform += `rotate(180deg)`
            if (patchdesc.style.display != 'block'){
                setTimeout(()=>{
                    patchdesc.style.display = 'block';
                },200)
            } else {
                patchdesc.style.display = 'none';
            }
            if (ul) {
                const liCount = ul.querySelectorAll('li').length;

                if (liCount >= 1 && liCount <= 4) {
                    const heightMap = { 1: "110px", 2: "150px", 3: "200px", 4: "250px" };
                    let targetHeight = heightMap[liCount];
                    document.querySelectorAll('li').forEach(li => {
                        if (li.textContent.length >= 160) {
                            const currentHeight = parseInt(targetHeight);
                            targetHeight = (currentHeight + 30) + "px";
                        }
                    });
                    patch.style.height = patch.style.height === targetHeight ? "50px" : targetHeight;
                }
            }
        });

        document.addEventListener('click', (e) => {
            if (!patch.contains(e.target)) {
                patchdesc.style.display = 'none';
                patch.style.height = "50px";
                morebtn.style.transform = `rotate(0deg)`
            }
        });
    });
    
});