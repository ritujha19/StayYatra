  const texts = [
            "Discover unique stays. explore our nivaas.",
            "Explore India, feel at home.",
            "Camp, relax, and travel better.",
            "Your next nivaas is just a click away."
        ];

        const element = document.getElementById("typing-text");
        let index = 0;
        let charIndex = 0;
        let isDeleting = false;

        function getStyledSubstring(text, length) {
            // Create a temporary div to work with HTML
            const tempDiv = document.createElement('div');
            
            // Apply styling to the full text first
            let styledText = text;
            styledText = styledText.replace(/\bnivaas\b/gi, '<span class="samarkan-font">Nivaas</span>');
            styledText = styledText.replace(/\bexplore india\b/gi, '<span class="samarkan-font">explore india</span>');
            styledText = styledText.replace(/\btravel better\b/gi, '<span class="samarkan-font">Travel better</span>');
            
            tempDiv.innerHTML = styledText;
            
            // Get the plain text for character counting
            const plainText = tempDiv.textContent || tempDiv.innerText || '';
            
            if (length >= plainText.length) {
                return styledText;
            }
            
            // Build the visible text character by character while preserving styling
            let visibleText = '';
            let currentLength = 0;
            
            function processNode(node) {
                if (currentLength >= length) return;
                
                if (node.nodeType === Node.TEXT_NODE) {
                    const textContent = node.textContent;
                    const remainingLength = length - currentLength;
                    
                    if (remainingLength >= textContent.length) {
                        visibleText += textContent;
                        currentLength += textContent.length;
                    } else {
                        visibleText += textContent.substring(0, remainingLength);
                        currentLength += remainingLength;
                    }
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    const tagName = node.tagName.toLowerCase();
                    const className = node.className ? ` class="${node.className}"` : '';
                    
                    visibleText += `<${tagName}${className}>`;
                    
                    for (let child of node.childNodes) {
                        processNode(child);
                        if (currentLength >= length) break;
                    }
                    
                    visibleText += `</${tagName}>`;
                }
            }
            
            for (let child of tempDiv.childNodes) {
                processNode(child);
                if (currentLength >= length) break;
            }
            
            return visibleText;
        }

        function typeLoop() {
            const fullText = texts[index];
            const plainText = fullText.replace(/<[^>]*>/g, ''); // Remove HTML for length calculation
            
            if (!isDeleting) {
                charIndex++;
                const partialText = getStyledSubstring(fullText, charIndex);
                element.innerHTML = partialText + '<span class="cursor">|</span>';

                if (charIndex >= plainText.length) {
                    isDeleting = true;
                    setTimeout(typeLoop, 1500);
                    return;
                }
            } else {
                charIndex--;
                const partialText = getStyledSubstring(fullText, charIndex);
                element.innerHTML = partialText + '<span class="cursor">|</span>';

                if (charIndex <= 0) {
                    isDeleting = false;
                    index = (index + 1) % texts.length;
                }
            }

            setTimeout(typeLoop, isDeleting ? 40 : 60);
        }

        window.onload = typeLoop;