const colors: string[] = [];

for (let i = 0; i < 1000; i++) {
    colors.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
}

export default colors;