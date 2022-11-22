declare global {
    namespace jest {
        interface Matchers<R> {
            toBeWithinSecondsOf(compareDate: number, seconds: number): R;
            toMatchMadeHttpRequest(): R;
        }
    }
}
export {};
//# sourceMappingURL=setup-jest.d.ts.map