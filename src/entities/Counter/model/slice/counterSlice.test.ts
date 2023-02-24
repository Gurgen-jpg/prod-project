import { DeepPartial } from "@reduxjs/toolkit";
import { CounterSchema } from "entities/Counter";
import { counterActions, counterReducer } from "./counterSlice";

describe('counterSlice', () => {
    test('decrement', () => {
        const state: DeepPartial<CounterSchema> = { value: 10 };
        expect(counterReducer(state as CounterSchema, counterActions.decrement))
            .toEqual({ value: 9 });
    });
    test('increment', () => {
        const state: DeepPartial<CounterSchema> = { value: 10 };
        expect(counterReducer(state as CounterSchema, counterActions.increment))
            .toEqual({ value: 11 });
    });
});
