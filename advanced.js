const weaponDataWithReskins = {
    scout: {
        primary: ["Baby Face's Blaster", "Back Scatter", "Force-A-Nature", "Scattergun", "Shortstop", "Soda Popper"],
        secondary: ["Bonk! Atomic Punch", "C.A.P.P.E.R", "Crit-a-Cola", "Flying Guillotine", "Lugermorph", "Mad Milk", "Mutated Milk", "Pistol", "Pretty Boy's Pocket Pistol", "Winger"],
        melee: ["Atomizer", "Bat", "Bat Outta Hell", "Batsaber", "Boston Basher", "Candy Cane", "Conscientious Objector", "Crossing Guard", "Fan O'War", "Frying Pan", "Golden Frying Pan", "Ham Shank", "Holy Mackerel", "Memory Maker", "Necro Smasher", "Prinny Machete", "Sandman", "Saxxy", "Sun-on-a-Stick", "Three-Rune Blade", "Unarmed Combat", "Wrap Assassin"]
    },
    soldier: {
        primary: ["Air Strike", "Beggar's Bazooka", "Black Box", "Cow Mangler 5000", "Direct Hit", "Liberty Launcher", "Original", "Rocket Jumper", "Rocket Launcher"],
        secondary: ["B.A.S.E. Jumper", "Battalion's Backup", "Buff Banner", "Concheror", "Gunboats", "Mantreads", "Panic Attack", "Reserve Shooter", "Righteous Bison", "Shotgun"],
        melee: ["Bat Outta Hell", "Conscientious Objector", "Crossing Guard", "Disciplinary Action", "Equalizer", "Escape Plan", "Frying Pan", "Golden Frying Pan", "Half-Zatoichi", "Ham Shank", "Market Gardener", "Memory Maker", "Necro Smasher", "Pain Train", "Prinny Machete", "Saxxy", "Shovel"]
    },
    pyro: {
        primary: ["Backburner", "Degreaser", "Dragon's Fury", "Flame Thrower", "Nostromo Napalmer", "Phlogistinator", "Rainblower"],
        secondary: ["Detonator", "Flare Gun", "Gas Passer", "Manmelter", "Panic Attack", "Reserve Shooter", "Scorch Shot", "Shotgun", "Thermal Thruster"],
        melee: ["Axtinguisher", "Back Scratcher", "Bat Outta Hell", "Conscientious Objector", "Crossing Guard", "Fire Axe", "Frying Pan", "Golden Frying Pan", "Ham Shank", "Homewrecker", "Hot Hand", "Lollichop", "Maul", "Memory Maker", "Necro Smasher", "Neon Annihilator", "Postal Pummeler", "Powerjack", "Prinny Machete", "Saxxy", "Sharpened Volcano Fragment", "Third Degree"]
    },
    demoman: {
        primary: ["Ali Baba's Wee Booties", "B.A.S.E. Jumper", "Bootlegger", "Grenade Launcher", "Iron Bomber", "Loch-n-Load", "Loose Cannon"],
        secondary: ["Chargin' Targe", "Quickiebomb Launcher", "Scottish Resistance", "Splendid Screen", "Sticky Jumper", "Stickybomb Launcher", "Tide Turner"],
        melee: ["Bat Outta Hell", "Bottle", "Claidheamh Mòr", "Conscientious Objector", "Crossing Guard", "Eyelander", "Frying Pan", "Golden Frying Pan", "Half-Zatoichi", "Ham Shank", "Horseless Headless Horsemann's Headtaker", "Memory Maker", "Necro Smasher", "Nessie's Nine Iron", "Pain Train", "Persian Persuader", "Prinny Machete", "Saxxy", "Scottish Handshake", "Scotsman's Skullcutter", "Ullapool Caber"]
    },
    heavy: {
        primary: ["Brass Beast", "Huo-Long Heater", "Iron Curtain", "Minigun", "Natascha", "Tomislav"],
        secondary: ["Buffalo Steak Sandvich", "Dalokohs Bar", "Family Business", "Fishcake", "Panic Attack", "Robo-Sandvich", "Sandvich", "Second Banana", "Shotgun"],
        melee: ["Apoco-Fists", "Bat Outta Hell", "Bread Bite", "Conscientious Objector", "Crossing Guard", "Eviction Notice", "Fists", "Fists of Steel", "Frying Pan", "Golden Frying Pan", "Ham Shank", "Holiday Punch", "Killing Gloves of Boxing", "Memory Maker", "Necro Smasher", "Prinny Machete", "Saxxy", "Warrior's Spirit"]
    },
    engineer: {
        primary: ["Frontier Justice", "Panic Attack", "Pomson 6000", "Rescue Ranger", "Shotgun", "Widowmaker"],
        secondary: ["C.A.P.P.E.R", "Giger Counter", "Lugermorph", "Pistol", "Short Circuit", "Wrangler"],
        melee: ["Eureka Effect", "Golden Frying Pan", "Golden Wrench", "Gunslinger", "Jag", "Necro Smasher", "Prinny Machete", "Saxxy", "Southern Hospitality", "Wrench"],
        pda: ["Construction PDA"]
    },
    medic: {
        primary: ["Blutsauger", "Crusader's Crossbow", "Overdose", "Syringe Gun"],
        secondary: ["Kritzkrieg", "Medi Gun", "Quick-Fix", "Vaccinator"],
        melee: ["Amputator", "Bat Outta Hell", "Bonesaw", "Conscientious Objector", "Crossing Guard", "Frying Pan", "Golden Frying Pan", "Ham Shank", "Memory Maker", "Necro Smasher", "Prinny Machete", "Saxxy", "Solemn Vow", "Ubersaw", "Vita-Saw"]
    },
    sniper: {
        primary: ["AWPer Hand", "Bazaar Bargain", "Classic", "Fortified Compound", "Hitman's Heatmaker", "Huntsman", "Machina", "Shooting Star", "Sniper Rifle", "Sydney Sleeper"],
        secondary: ["Cleaner's Carbine", "Cozy Camper", "Darwin's Danger Shield", "Jarate", "Razorback", "Self-Aware Beauty Mark", "SMG"],
        melee: ["Bat Outta Hell", "Bushwacka", "Conscientious Objector", "Crossing Guard", "Frying Pan", "Golden Frying Pan", "Ham Shank", "Kukri", "Memory Maker", "Necro Smasher", "Prinny Machete", "Saxxy", "Shahanshah", "Tribalman's Shiv"]
    },
    spy: {
        primary: ["Ambassador", "Big Kill", "Diamondback", "Enforcer", "L'Etranger", "Revolver"],
        secondary: ["Cloak and Dagger", "Dead Ringer", "Enthusiast's Timepiece", "Invis Watch", "Quackenbirdt"],
        melee: ["Big Earner", "Black Rose", "Conniver's Kunai", "Golden Frying Pan", "Knife", "Prinny Machete", "Saxxy", "Sharp Dresser", "Spy-cicle", "Wanga Prick", "Your Eternal Reward"],
        sapper: ["Ap-Sap", "Red-Tape Recorder", "Electro Sapper", "Snack Attack"],
        kit: ["Disguise Kit"]
    }
};

const weaponData = {
    scout: {
        primary: ["Baby Face's Blaster", "Back Scatter", "Force-A-Nature", "Scattergun", "Shortstop", "Soda Popper"],
        secondary: ["Bonk! Atomic Punch", "Crit-a-Cola", "Flying Guillotine", "Mad Milk", "Pistol", "Pretty Boy's Pocket Pistol", "Winger"],
        melee: ["Atomizer", "Bat", "Boston Basher", "Candy Cane", "Fan O'War", "Holy Mackerel", "Sandman", "Sun-on-a-Stick", "Wrap Assassin"]
    },
    soldier: {
        primary: ["Air Strike", "Beggar's Bazooka", "Black Box", "Cow Mangler 5000", "Direct Hit", "Liberty Launcher", "Original", "Rocket Jumper", "Rocket Launcher"],
        secondary: ["B.A.S.E. Jumper", "Battalion's Backup", "Buff Banner", "Concheror", "Gunboats", "Mantreads", "Panic Attack", "Reserve Shooter", "Righteous Bison", "Shotgun"],
        melee: ["Disciplinary Action", "Equalizer", "Escape Plan", "Half-Zatoichi", "Market Gardener", "Pain Train", "Shovel"]
    },
    pyro: {
        primary: ["Backburner", "Degreaser", "Dragon's Fury", "Flame Thrower", "Nostromo Napalmer", "Phlogistinator", "Rainblower"],
        secondary: ["Detonator", "Flare Gun", "Gas Passer", "Manmelter", "Panic Attack", "Reserve Shooter", "Scorch Shot", "Shotgun", "Thermal Thruster"],
        melee: ["Axtinguisher", "Back Scratcher", "Fire Axe", "Homewrecker", "Hot Hand", "Neon Annihilator", "Powerjack", "Sharpened Volcano Fragment", "Third Degree"]
    },
    demoman: {
        primary: ["Ali Baba's Wee Booties", "B.A.S.E. Jumper", "Grenade Launcher", "Iron Bomber", "Loch-n-Load", "Loose Cannon"],
        secondary: ["Chargin' Targe", "Quickiebomb Launcher", "Scottish Resistance", "Splendid Screen", "Sticky Jumper", "Stickybomb Launcher", "Tide Turner"],
        melee: ["Bottle", "Claidheamh Mòr", "Eyelander", "Half-Zatoichi", "Pain Train", "Persian Persuader", "Scotsman's Skullcutter", "Ullapool Caber"]
    },
    heavy: {
        primary: ["Brass Beast", "Huo-Long Heater", "Minigun", "Natascha", "Tomislav"],
        secondary: ["Buffalo Steak Sandvich", "Dalokohs Bar", "Family Business", "Panic Attack", "Sandvich", "Second Banana", "Shotgun"],
        melee: ["Eviction Notice", "Fists", "Fists of Steel", "Holiday Punch", "Killing Gloves of Boxing", "Warrior's Spirit"]
    },
    engineer: {
        primary: ["Frontier Justice", "Panic Attack", "Pomson 6000", "Rescue Ranger", "Shotgun", "Widowmaker"],
        secondary: ["Pistol", "Short Circuit", "Wrangler"],
        melee: ["Eureka Effect", "Gunslinger", "Jag", "Southern Hospitality", "Wrench"],
        pda: ["Construction PDA"]
    },
    medic: {
        primary: ["Blutsauger", "Crusader's Crossbow", "Overdose", "Syringe Gun"],
        secondary: ["Kritzkrieg", "Medi Gun", "Quick-Fix", "Vaccinator"],
        melee: ["Amputator", "Bonesaw", "Solemn Vow", "Ubersaw", "Vita-Saw"]
    },
    sniper: {
        primary: ["Bazaar Bargain", "Classic", "Hitman's Heatmaker", "Huntsman", "Machina", "Sniper Rifle", "Sydney Sleeper"],
        secondary: ["Cleaner's Carbine", "Cozy Camper", "Darwin's Danger Shield", "Jarate", "Razorback", "SMG"],
        melee: ["Bushwacka", "Kukri", "Shahanshah", "Tribalman's Shiv"]
    },
    spy: {
        primary: ["Ambassador", "Diamondback", "Enforcer", "L'Etranger", "Revolver"],
        secondary: ["Cloak and Dagger", "Dead Ringer", "Invis Watch"],
        melee: ["Big Earner", "Conniver's Kunai", "Knife", "Spy-cicle", "Your Eternal Reward"],
        sapper: ["Red-Tape Recorder", "Electro Sapper"],
        kit: ["Disguise Kit"]
    }
};



document.addEventListener("DOMContentLoaded", function() {
    const classBanSection = document.getElementById("class-ban-section");
    const weaponBanSection = document.getElementById("weapon-ban-section");
    const advGenerateBtn = document.getElementById("adv-generate-btn");
    const advLoadoutDisplay = document.getElementById("adv-loadout-display");

    // Store banned weapons for each class
    const bannedWeapons = {};

    // Store the open/close state of each slot menu
    const slotMenuStates = {};

    // Dynamically generate class ban checkboxes
    Object.keys(weaponData).forEach(className => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = className;
        checkbox.classList.add("class-ban");
        checkbox.dataset.className = className; // Store class name in dataset
        const label = document.createElement("label");
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(` ${className}`));
        classBanSection.appendChild(label);

        // Initialize banned weapons object and slot menu state for this class
        bannedWeapons[className] = [];
        slotMenuStates[className] = {
            open: false, // Initially set all slot menus closed
            slots: {} // Store the open/close state of each slot menu
        };
    });

    // Update weapon ban menus when banning classes
    classBanSection.addEventListener("change", function() {
        const bannedClasses = Array.from(document.querySelectorAll(".class-ban:checked")).map(cb => cb.value);
        updateWeaponBanMenus(bannedClasses);
    });

    const reskinCheckbox = document.getElementById("reskin-checkbox");

    // Event listener for the reskin checkbox
    reskinCheckbox.addEventListener("change", function() {
        const bannedClasses = Array.from(document.querySelectorAll(".class-ban:checked")).map(cb => cb.value);
        const useReskins = this.checked; // Update the state of the checkbox
        updateWeaponBanMenus(bannedClasses, useReskins); // Pass the updated state to the function
    });


    // Generate random loadout for Advanced Generate
    advGenerateBtn.addEventListener("click", function() {
        const bannedClasses = Array.from(document.querySelectorAll(".class-ban:checked")).map(cb => cb.value);
        const useReskins = reskinCheckbox.checked;
        const loadout = generateAdvancedLoadout(bannedClasses, useReskins);
        displayLoadout(loadout, advLoadoutDisplay);
    });

    function updateWeaponBanMenus(bannedClasses, useReskins) {
        if (!Array.isArray(bannedClasses)) {
            // If bannedClasses is not an array, convert it to an array with a single element
            bannedClasses = [bannedClasses];
        }
    
        // Save the current state of slot menus
        const prevSlotMenuStates = { ...slotMenuStates };
    
        // Store reference to reskin checkbox
        const reskinCheckbox = document.getElementById("reskin-checkbox");
    
        // Clear weapon ban section
        weaponBanSection.innerHTML = "";
    
        // Re-append reskin checkbox
        weaponBanSection.appendChild(reskinCheckbox);
    
        Object.keys(weaponData).forEach(className => {
            if (bannedClasses.includes(className)) {
                // Skip this class if it's banned
                return;
            }
    
            const weapons = useReskins ? weaponDataWithReskins[className] : weaponData[className];
    
            const classDiv = document.createElement("div");
            classDiv.classList.add("tiered-menu");
            classDiv.dataset.class = className; // Store class name in dataset
    
            const classAnchor = document.createElement("a");
            classAnchor.classList.add("top-tier");
            classAnchor.href = "#";
            classAnchor.textContent = className.charAt(0).toUpperCase() + className.slice(1);
            classDiv.appendChild(classAnchor);
    
            const collapsibleDiv = document.createElement("div");
            collapsibleDiv.classList.add("collapsible");
            collapsibleDiv.style.display = prevSlotMenuStates[className].open ? "block" : "none"; // Maintain the open/close state
    
            Object.keys(weapons).forEach(weaponType => {
                const weaponTypeDiv = document.createElement("div");
                weaponTypeDiv.classList.add("tiered-menu");
    
                const weaponTypeAnchor = document.createElement("a");
                weaponTypeAnchor.classList.add("top-tier");
                weaponTypeAnchor.href = "#";
                weaponTypeAnchor.textContent = weaponType.charAt(0).toUpperCase() + weaponType.slice(1);
                weaponTypeDiv.appendChild(weaponTypeAnchor);
    
                const weaponCollapsibleDiv = document.createElement("div");
                weaponCollapsibleDiv.classList.add("collapsible");
                weaponCollapsibleDiv.style.display = prevSlotMenuStates[className].slots[weaponType] ? "block" : "none"; // Maintain the open/close state
    
                const allWeapons = useReskins ? weaponDataWithReskins[className][weaponType] : weaponData[className][weaponType];
    
                allWeapons.forEach(weapon => {
                    if (useReskins && bannedClasses.includes(className)) {
                        // Skip reskin weapons if class is banned and reskin is enabled
                        return;
                    }
    
                    const weaponCheckbox = document.createElement("input");
                    weaponCheckbox.type = "checkbox";
                    weaponCheckbox.value = weapon;
                    weaponCheckbox.classList.add("weapon-ban");
                    weaponCheckbox.dataset.className = className; // Store class name in dataset
    
                    const weaponLabel = document.createElement("label");
                    weaponLabel.textContent = weapon;
                    weaponLabel.appendChild(weaponCheckbox);
    
                    const weaponAnchor = document.createElement("a");
                    weaponAnchor.href = "#";
                    weaponAnchor.appendChild(weaponLabel);
    
                    const weaponItemDiv = document.createElement("div");
                    weaponItemDiv.appendChild(weaponAnchor);
                    weaponCollapsibleDiv.appendChild(weaponItemDiv);
                });
    
                weaponTypeDiv.appendChild(weaponCollapsibleDiv);
                collapsibleDiv.appendChild(weaponTypeDiv);
    
                // Toggle display of weapon slot menu
                weaponTypeAnchor.addEventListener("click", function() {
                    weaponCollapsibleDiv.style.display = weaponCollapsibleDiv.style.display === "none" ? "block" : "none";
                    slotMenuStates[className].slots[weaponType] = weaponCollapsibleDiv.style.display === "block";
                });
            });
    
            classDiv.appendChild(collapsibleDiv);
            weaponBanSection.appendChild(classDiv);
    
            // Toggle display of class menu
            classAnchor.addEventListener("click", function() {
                collapsibleDiv.style.display = collapsibleDiv.style.display === "none" ? "block" : "none";
                slotMenuStates[className].open = collapsibleDiv.style.display === "block";
            });
        });
    }
    

    // Generate initial weapon ban menus
    updateWeaponBanMenus([]);

    // Update banned weapons when weapon checkboxes are changed
    weaponBanSection.addEventListener("change", function(event) {
        const weaponCheckbox = event.target;
        const className = weaponCheckbox.dataset.className;
        const weaponName = weaponCheckbox.value;

        if (weaponCheckbox.checked) {
            // Add weapon to banned list for the corresponding class
            if (!bannedWeapons[className].includes(weaponName)) {
                bannedWeapons[className].push(weaponName);
            }
        } else {
            // Remove weapon from banned list for the corresponding class
            const index = bannedWeapons[className].indexOf(weaponName);
            if (index !== -1) {
                bannedWeapons[className].splice(index, 1);
            }
        }
    });


    function generateAdvancedLoadout(bannedClasses, useReskins) {
        // Filter out classes that are banned
        const availableClasses = Object.keys(weaponData).filter(cls => !bannedClasses.includes(cls));
    
        // Randomly select one of the available classes
        const selectedClass = availableClasses[Math.floor(Math.random() * availableClasses.length)];
    
        // Retrieve weapons for the selected class
        const weapons = useReskins ? weaponDataWithReskins[selectedClass] : weaponData[selectedClass];
    
        // Filter out banned weapons for the selected class
        const filteredWeapons = {};
        Object.keys(weapons).forEach(weaponType => {
            // Filter out banned weapons for this category
            filteredWeapons[weaponType] = weapons[weaponType].filter(weapon => !bannedWeapons[selectedClass].includes(weapon));
        });
    
        // Check if any category has no available weapons
        if (!filteredWeapons.primary.length || !filteredWeapons.secondary.length || !filteredWeapons.melee.length) {
            // If any category has no available weapons, return null to indicate failure
            return null;
        }
    
        // Randomly select one weapon from each category
        return {
            class: selectedClass,
            primary: filteredWeapons.primary[Math.floor(Math.random() * filteredWeapons.primary.length)],
            secondary: filteredWeapons.secondary[Math.floor(Math.random() * filteredWeapons.secondary.length)],
            melee: filteredWeapons.melee[Math.floor(Math.random() * filteredWeapons.melee.length)]
        };
    }
    



    function displayLoadout(loadout, displayElement) {
        // Function to generate the image path for a weapon
        function getWeaponImagePath(className, slot, weapon) {
            // Replace spaces with underscores to match file naming conventions
            const sanitizedWeaponName = weapon.replace(/ /g, '_');
            return `icons/weapons/${className}/${slot}/${sanitizedWeaponName}.png`;
        }
    
        // Function to generate the image path for a class
        function getClassImagePath(className) {
            return `icons/classes/${className}.png`;
        }
    
        // Function to generate the scaled down image tag
        function getScaledImageTag(imagePath, altText) {
            return `<img src="${imagePath}" alt="${altText}" style="max-width: 250px; height: auto;">`;
        }
    
        const classImagePath = getClassImagePath(loadout.class);
        const classImageTag = `<img src="${classImagePath}" alt="${loadout.class}" style="max-width: 100%; height: 200px;">`;
    
        displayElement.innerHTML = `
            <div class="class-image">
                ${classImageTag}
            </div>
            <h3>${loadout.class.toUpperCase()}</h3>
            <div class="loadout-item">
                <p>Primary: ${loadout.primary}</p>
                ${getScaledImageTag(getWeaponImagePath(loadout.class, 'primary', loadout.primary), loadout.primary)}
            </div>
            <div class="loadout-item">
                <p>Secondary: ${loadout.secondary}</p>
                ${getScaledImageTag(getWeaponImagePath(loadout.class, 'secondary', loadout.secondary), loadout.secondary)}
            </div>
            <div class="loadout-item">
                <p>Melee: ${loadout.melee}</p>
                ${getScaledImageTag(getWeaponImagePath(loadout.class, 'melee', loadout.melee), loadout.melee)}
            </div>
        `;
    }

});
