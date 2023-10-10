#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n, int k) {
    int answer = 12000 * n + 2000 * k - 2000 * (n / 10);
    return answer;
}