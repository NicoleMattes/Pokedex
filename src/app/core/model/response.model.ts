export class ResponseModel<T> {
    count!: number;
    next!: string;
    previous!: string;
    results!: T
}
