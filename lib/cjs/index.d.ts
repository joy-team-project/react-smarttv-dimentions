import React from "react";
import { scaleFont } from "./utils/scale.util";
export interface IDimentionContext {
    dimention: {
        width: number;
        height: number;
    };
    setAppDimention: () => void;
}
export declare const DimentionContext: React.Context<IDimentionContext>;
export declare const DimentionProvider: ({ children }: {
    children: any;
}) => JSX.Element;
export interface DimentionProps {
    dimentionContext?: IDimentionContext;
}
export declare function withDimentionContext<T>(WrappedComponent: React.ComponentType<T>): {
    new (props: T | Readonly<T>): {
        render(): JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<T>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<T>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<T>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<T>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<T>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<T>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<T>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<T>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<T>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: T, context: any): {
        render(): JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<T>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<T>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<T>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<T>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<T>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<T>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<T>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<T>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<T>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any>;
};
export { scaleFont };
