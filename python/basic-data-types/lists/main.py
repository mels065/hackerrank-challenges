def insert(cur, i, e):
    cur = cur[:]
    cur.insert(int(i), int(e))
    return cur

def printList(cur):
    print(cur)
    return cur

def remove(cur, e):
    cur = cur[:]
    cur.remove(int(e))
    return cur

def append(cur, e):
    cur = cur[:]
    cur.append(int(e))
    return cur

def sort(cur):
    cur = cur[:]
    cur.sort()
    return cur

def pop(cur):
    cur = cur[:]
    cur.pop()
    return cur

def reverse(cur):
    cur = cur[:]
    cur.reverse()
    return cur

actions = {
    "insert": insert,
    "print": printList,
    "remove": remove,
    "append": append,
    "sort": sort,
    "pop": pop,
    "reverse": reverse
}

if __name__ == '__main__':
    N = int(raw_input())
    cur = []
    for i in range(N):
        line = raw_input().split()
        command, args = line[:1][0], line[1:]
        cur = actions[command](cur, *args)
