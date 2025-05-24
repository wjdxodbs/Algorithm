function solution(n) {
    let arr = Array.from({length: n}, () => Array(n).fill(0));
    let arrow = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let idx = 0;
    let i1 = 0, j1 = 0, cnt = 1;

    while (true) {
        arr[i1][j1] = cnt++;
        let i2 = i1 + arrow[idx][0];
        let j2 = j1 + arrow[idx][1];

        if (
            i2 < 0 || i2 >= n ||
            j2 < 0 || j2 >= n ||
            arr[i2][j2] !== 0
        ) {
            idx = (idx + 1) % 4;
            i2 = i1 + arrow[idx][0];
            j2 = j1 + arrow[idx][1];

            if (
                i2 < 0 || i2 >= n ||
                j2 < 0 || j2 >= n ||
                arr[i2][j2] !== 0
            ) {
                break;
            }
        }
        
        i1 = i2;
        j1 = j2;
    }
    return arr;
}
