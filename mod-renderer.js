if (typeof modData !== 'undefined') {
    
    const container = document.getElementById('mod-container');

    modData.forEach(mod => {
        // Card Div (.mod-card)
        const modCard = document.createElement('div');
        modCard.className = 'mod-card'; 

        // Image Element
        const img = document.createElement('img');
        img.src = mod.image;
        img.alt = mod.name;
        
        // Title Element
        const title = document.createElement('h3');
        title.textContent = mod.name;

        // Optional: Description Paragraph
        const desc = document.createElement('p');
        desc.textContent = mod.description;
        // Apply a style class if needed
        desc.className = 'mod-description'; 

        // Download Link Element (.btn)
        const downloadLink = document.createElement('a');
        downloadLink.href = mod.downloadLink; // Uses the link from the data
        downloadLink.className = 'btn';
        downloadLink.textContent = 'Download';
        downloadLink.target = '_blank'; // Opens in a new tab

        // 4. Assemble the card: append children to the modCard
        modCard.appendChild(img);
        modCard.appendChild(title);
        modCard.appendChild(desc); // Add description
        modCard.appendChild(downloadLink);

        // 5. Insert the completed card into the main container
        container.appendChild(modCard);
    });
}