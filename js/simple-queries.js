class Node {
    constructor(value) {
        this.value = value;
        this.priority = Math.random();
        this.left = null;
        this.right = null;
        this.size = 1;
    }

    static split(t, splitTrees, key) {
        if (!t) {
            splitTrees[0] = null;
            splitTrees[1] = null;
        }
        else if (Node.getSize(t.left) <= key) {
            Node.split(t.right, [t.right, splitTrees[1]], key);
            splitTrees[0] = t;
        }
        else {
            Node.split(t.left, [splitTrees[0], t.left], key);
            splitTrees[1] = t;
        }

        if (t) t.updateSize();
        return splitTrees;
    }

    static merge(mergedTreap, left, right) {
        if (!left || !right) {
            console.log('Leaf')
            mergedTreap[0] = left ? left : right;
        }
        else if (left.priority > right.priority) {
            console.log('Traverse right')
            left.right = Node.merge([left.right], left.right, right)[0];=
            mergedTreap[0] = left;
        }
        else {
            console.log('Traverse left')
            right.left = Node.merge([right.left], left, right.left)[0];
            mergedTreap[0] = right;
        }

        if (mergedTreap[0]) mergedTreap[0].updateSize();
        return mergedTreap;
    }

    static getSize(node) {
        return node ? node.size : 0;
    }

    static extractSubTreap(node, i, j) {
        let left, middle, right;
        [left, middle] = Node.split(node, [null, null], j);
        [middle, right] = Node.split(middle, [null, null], i);
        node = Node.merge([null], left, right);
        return [node, middle];
    }

    updateSize() {
        const leftSize = this.left ? this.left.size : 0;
        const rightSize = this.right ? this.right.size : 0;
        this.size = leftSize + rightSize + 1;
    }

    printTreap() {
        console.log(this.traverseTreap());
    }

    traverseTreap(traverse=[]) {
        if (this.left) {
            this.left.traverseTreap(traverse);
        }

        traverse.push(this.value);

        if (this.right) {
            this.right.traverseTreap(traverse);
        }

        return traverse;
    }
}

function processData(input) {
    const args = input.split('\n');

    const [N, M] = args.shift().split(' ');
    let treap = null;
    args.shift().split(' ').slice(0, N).forEach(val => {
        console.log(val)
        if (!treap) {
            treap = new Node(Number(val));
        } else {
            [treap] = Node.merge([null], treap, new Node(Number(val)));
        }
    });

    const queries = args;
    queries.forEach(query => {
        const [op, i, j] = query.split(' ');

        let subTreap;
        [treap, subTreap] = Node.extractSubTreap(treap, Number(i), Number(j));
        switch(op) {
            case '1':
                [treap] = Node.merge([null], subTreap, treap);
                break;
            case '2':
                [treap] = Node.merge([null], treap, subTreap);
                break;
        }
    });

    console.log(treap.traverseTreap().join(' '));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
