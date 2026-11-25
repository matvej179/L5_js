import DigitalLibrary from './DigitalLibrary.js';

const libraries = [
    new DigitalLibrary(1, "Центральная городская", true, 500),
    new DigitalLibrary(2, "Университетская электронная", false, 1200)
];

libraries.forEach(lib => {
    lib.show();
    console.log("\n");
});