/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPredicateVisitorProtocol<T0 = void, T1 = void, T2 = void> {
    visitPredicateOperator<R = void, P0 = NSPredicateOperator>(_visitPredicateOperator: P0): R;
    visitPredicateExpression<R = void, P0 = NSExpression>(_visitPredicateExpression: P0): R;
    visitPredicate<R = void, P0 = NSPredicate>(_visitPredicate: P0): R;
  }
  namespace NSPredicateVisitorProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
