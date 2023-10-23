const colors: string[] = [];

export function initialize() {
    for (let i = 0; i < 1000; i++) {
        // colors.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
        for (let i of ["#0a5fd0", "#ed0dba", "#6f2fe3", "#EE6C4D", "#293241"]) {
            colors.push(i);
        }
        // colors.push("red");
    }
}

export default colors;