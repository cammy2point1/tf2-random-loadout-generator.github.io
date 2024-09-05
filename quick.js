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
        melee: ["Disciplinary Action", "Equalizer", "Escape Plan", "Frying Pan", "Half-Zatoichi", "Market Gardener", "Pain Train", "Shovel"]
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
    const classContainer = document.querySelector(".radio-container");
    const quickGenerateBtn = document.getElementById("quick-generate-btn");
    const quickLoadoutDisplay = document.getElementById("quick-loadout-display");
    const reskinCheckbox = document.getElementById("reskin-checkbox");

    // Populate class selection with radio buttons
    Object.keys(weaponData).forEach(className => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        const img = document.createElement("img");

        input.type = "radio";
        input.name = "class";
        input.value = className;

        img.src = `icons/classes/${className.charAt(0).toUpperCase() + className.slice(1)}_emblem_RED.png`;
        img.alt = className.charAt(0).toUpperCase() + className.slice(1);

        label.appendChild(input);
        label.appendChild(img);

        classContainer.appendChild(label);
    });

    // Set default selection to random
    document.querySelector('input[name="class"][value="random"]').checked = true;

    // Enable generate button when a class is selected
    classContainer.addEventListener("change", function() {
        quickGenerateBtn.disabled = !document.querySelector('input[name="class"]:checked');
        updateSelectedClassStyle();
    });

    // Update styles for selected class
    function updateSelectedClassStyle() {
        document.querySelectorAll(".radio-container label").forEach(label => {
            label.classList.remove('selected');
        });
        const checkedLabel = document.querySelector('input[name="class"]:checked').parentElement;
        checkedLabel.classList.add('selected');
    }

    // Trigger change event to enable generate button and update styles when page is loaded
    classContainer.dispatchEvent(new Event('change'));

    // Generate random loadout for Quick Generate
    quickGenerateBtn.addEventListener("click", function() {
        let selectedClass = document.querySelector('input[name="class"]:checked').value;
        const useReskins = reskinCheckbox.checked;
        const currentWeaponData = useReskins ? weaponDataWithReskins : weaponData;

        if (selectedClass === "random") {
            const classes = Object.keys(currentWeaponData);
            selectedClass = classes[Math.floor(Math.random() * classes.length)];
        }

        const loadout = generateQuickLoadout(selectedClass, currentWeaponData);
        displayLoadout(loadout, quickLoadoutDisplay);
    });

    // Functions to generate and display loadout
    function generateQuickLoadout(selectedClass, currentWeaponData) {
        const weapons = currentWeaponData[selectedClass];
        const loadout = {
            class: selectedClass,
            primary: weapons.primary[Math.floor(Math.random() * weapons.primary.length)],
            secondary: weapons.secondary[Math.floor(Math.random() * weapons.secondary.length)],
            melee: weapons.melee[Math.floor(Math.random() * weapons.melee.length)]
        };

        if (selectedClass === "spy") {
            loadout.sapper = weapons.sapper[Math.floor(Math.random() * weapons.sapper.length)];
            loadout.kit = weapons.kit[Math.floor(Math.random() * weapons.kit.length)];
        } else if (selectedClass === "engineer") {
            loadout.pda = weapons.pda[Math.floor(Math.random() * weapons.pda.length)];
        }

        return loadout;
    }

    function displayLoadout(loadout, displayElement) {
        function getWeaponImagePath(className, slot, weapon) {
            const sanitizedWeaponName = weapon.replace(/ /g, '_');
            return `icons/weapons/${className}/${slot}/${sanitizedWeaponName}.png`;
        }
    
        function getClassImagePath(className) {
            return `icons/classes/${className}.png`;
        }
    
        // Generate the table with specific styles
        let loadoutHTML = `
            <div style="display: flex; justify-content: center; align-items: center;">
                <table style="background-color: #333; border-radius: 10px; padding: 10px; border-spacing: 10px; table-layout: fixed;">
                    <tr>
                        <td style="width: 50%; vertical-align: top;">
                            <div style="background-color: #444; border-radius: 10px; padding: 10px; margin-bottom: 10px; border: 2px solid #666; text-align: center;">
                                <img src="${getWeaponImagePath(loadout.class, 'primary', loadout.primary)}" style="max-width: 50%; height: auto; margin-top: 0px;">
                                <p style="font-family: 'tf2build'; color: yellow; margin-top: 0px; font-size: 1.5vw; margin-bottom: 0;">${loadout.primary}</p>
                            </div>
                            <div style="background-color: #444; border-radius: 10px; padding: 10px; margin-bottom: 10px; border: 2px solid #666; text-align: center;">
                                <img src="${getWeaponImagePath(loadout.class, 'secondary', loadout.secondary)}" style="max-width: 50%; height: auto; margin-top: 0px;">
                                <p style="font-family: 'tf2build'; color: yellow; margin-top: 0px; font-size: 1.5vw; margin-bottom: 0;">${loadout.secondary}</p>
                            </div>
                            <div style="background-color: #444; border-radius: 10px; padding: 10px;  border: 2px solid #666; text-align: center;">
                                <img src="${getWeaponImagePath(loadout.class, 'melee', loadout.melee)}" style="max-width: 50%; height: auto; margin-top: 0px;">
                                <p style="font-family: 'tf2build'; color: yellow; margin-top: 0px; font-size: 1.5vw; margin-bottom: 0;">${loadout.melee}</p>
                            </div>
        `;
    
        if (loadout.class === "spy") {
            loadoutHTML += `
                            <div style="background-color: #444; border-radius: 10px; padding: 10px; margin-top: 10px; border: 2px solid #666; text-align: center;">
                                <img src="${getWeaponImagePath(loadout.class, 'sapper', loadout.sapper)}" style="max-width: 50%; height: auto; margin-top: 0px;">
                                <p style="font-family: 'tf2build'; color: yellow; margin-top: 0px; font-size: 1.5vw; margin-bottom: 0;">${loadout.sapper}</p>
                            </div>
            `;
        } else if (loadout.class === "engineer") {
            loadoutHTML += `
                            <div style="background-color: #444; border-radius: 10px; padding: 10px; margin-top: 10px; border: 2px solid #666; text-align: center;">
                                <img src="${getWeaponImagePath(loadout.class, 'pda', loadout.pda)}" style="max-width: 50%; height: auto; margin-top: 0px;">
                                <p style="font-family: 'tf2build'; color: yellow; margin-top: 0px; font-size: 1.5vw; margin-bottom: 0;">${loadout.pda}</p>
                            </div>
            `;
        }
    
        loadoutHTML += `
                        </td>
                        <td style="max-width: 50%; text-align: center; vertical-align: middle; padding: 10px;">
                            <img src="${getClassImagePath(loadout.class)}" alt="${loadout.class}" style="width: 90%; height: auto;">
                        </td>
                    </tr>
                </table>
            </div>
        `;
    
        displayElement.innerHTML = loadoutHTML;
    }
});
