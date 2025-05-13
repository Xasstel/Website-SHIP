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
            patchdesc.style.display = patchdesc.style.display === 'block' ? 'none' : 'block';
            if (ul) {
                const liCount = ul.querySelectorAll('li').length;

                if (liCount >= 1 && liCount <= 4) {
                    const heightMap = {1: "100px", 2: "150px", 3: "200px", 4: "250px" };
                    const targetHeight = heightMap[liCount];
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