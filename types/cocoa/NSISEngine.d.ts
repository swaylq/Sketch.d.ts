/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISEngine<T = any> extends cocoa.NSObject, cocoa.NSISVariableDelegateProtocol {
    exerciseAmbiguityInVariable<R = boolean, P0 = unknown>(_exerciseAmbiguityInVariable: P0): R;
    valueOfVariableIsAmbiguous<R = boolean, P0 = unknown>(_valueOfVariableIsAmbiguous: P0): R;
    incoming_andOutgoing_foundOutgoing_rowHeadsThatMakeValueAmbiguousForVariable<R = boolean, P0 = unknown, P1 = unknown, P2 = string, P3 = unknown>(_incoming: P0, _andOutgoing: P1, _foundOutgoing: P2, _rowHeadsThatMakeValueAmbiguousForVariable: P3): R;
    bodyVarIsAmbiguous_withPivotOfOutgoingRowHead_foundOutgoingRowHead<R = boolean, P0 = unknown, P1 = unknown, P2 = string>(_bodyVarIsAmbiguous: P0, _withPivotOfOutgoingRowHead: P1, _foundOutgoingRowHead: P2): R;
    candidateRedundantConstraints<R = unknown>(): R;
    constraintsAffectingValueOfVariable<R = unknown, P0 = unknown>(_constraintsAffectingValueOfVariable: P0): R;
    verifyInternalIntegrity<R = void>(): R;
    pivotCount<R = number>(): R;
    colCount<R = number>(): R;
    rowCount<R = number>(): R;
    constraints<R = unknown>(): R;
    enumerateOriginalConstraints<R = void, P0 = cocoa.CDUnknownBlockType>(_enumerateOriginalConstraints: P0): R;
    variableChangeTransactionSignal<R = unknown>(): R;
    hasObservableForVariable<R = boolean, P0 = unknown>(_hasObservableForVariable: P0): R;
    removeObservableForVariable<R = void, P0 = unknown>(_removeObservableForVariable: P0): R;
    observableForVariable<R = unknown, P0 = unknown>(_observableForVariable: P0): R;
    tryToChangeConstraintSuchThatMarker_isReplacedByMarkerPlusDelta_undoHandler<R = boolean, P0 = unknown, P1 = number, P2 = cocoa.CDUnknownBlockType>(_tryToChangeConstraintSuchThatMarker: P0, _isReplacedByMarkerPlusDelta: P1, _undoHandler: P2): R;
    constraintDidChangeSuchThatMarker_shouldBeReplacedByMarkerPlusDelta<R = void, P0 = unknown, P1 = number>(_constraintDidChangeSuchThatMarker: P0, _shouldBeReplacedByMarkerPlusDelta: P1): R;
    _coreReplaceMarker_withMarkerPlusDelta<R = void, P0 = unknown, P1 = number>(__coreReplaceMarker: P0, _withMarkerPlusDelta: P1): R;
    removeConstraintWithMarker<R = void, P0 = unknown>(_removeConstraintWithMarker: P0): R;
    containsConstraintWithMarker<R = boolean, P0 = unknown>(_containsConstraintWithMarker: P0): R;
    outgoingRowHeadForRemovingConstraintWithMarker_outgoingRowHead<R = boolean, P0 = unknown, P1 = unknown>(_outgoingRowHeadForRemovingConstraintWithMarker: P0, _outgoingRowHead: P1): R;
    changeVariableToBeOptimized_fromPriority_toPriority<R = void, P0 = unknown, P1 = number, P2 = number>(_changeVariableToBeOptimized: P0, _fromPriority: P1, _toPriority: P2): R;
    removeVariableToBeOptimized_priority<R = void, P0 = unknown, P1 = number>(_removeVariableToBeOptimized: P0, _priority: P1): R;
    addVariableToBeOptimized_priority<R = void, P0 = unknown, P1 = number>(_addVariableToBeOptimized: P0, _priority: P1): R;
    tryToAddConstraintWithMarkerEngineVar_row_mutuallyExclusiveConstraints<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_tryToAddConstraintWithMarkerEngineVar: P0, _row: P1, _mutuallyExclusiveConstraints: P2): R;
    tryToAddConstraintWithMarker_expression_mutuallyExclusiveConstraints<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_tryToAddConstraintWithMarker: P0, _expression: P1, _mutuallyExclusiveConstraints: P2): R;
    tryToAddConstraintWithMarker_expression_integralizationAdjustment_mutuallyExclusiveConstraints<R = boolean, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(_tryToAddConstraintWithMarker: P0, _expression: P1, _integralizationAdjustment: P2, _mutuallyExclusiveConstraints: P3): R;
    endBookkeepingForVariableIfUnused<R = void, P0 = unknown>(_endBookkeepingForVariableIfUnused: P0): R;
    beginBookkeepingForVariableIfNeeded<R = void, P0 = unknown>(_beginBookkeepingForVariableIfNeeded: P0): R;
    containsVariable<R = boolean, P0 = unknown>(_containsVariable: P0): R;
    hasValue_forExpression<R = boolean, P0 = number, P1 = unknown>(_hasValue: P0, _forExpression: P1): R;
    valueForExpression<R = number, P0 = unknown>(_valueForExpression: P0): R;
    hasValueForPossiblyDeallocatedVariable<R = boolean, P0 = unknown>(_hasValueForPossiblyDeallocatedVariable: P0): R;
    hasValue_forEngineVar<R = boolean, P0 = number, P1 = unknown>(_hasValue: P0, _forEngineVar: P1): R;
    hasValue_forVariable<R = boolean, P0 = number, P1 = unknown>(_hasValue: P0, _forVariable: P1): R;
    valueForEngineVar<R = number, P0 = unknown>(_valueForEngineVar: P0): R;
    valueForVariable<R = number, P0 = unknown>(_valueForVariable: P0): R;
    withDelegateCallsDisabled<R = void, P0 = cocoa.CDUnknownBlockType>(_withDelegateCallsDisabled: P0): R;
    withoutOptimizingAtEndRunBlockWithAutomaticOptimizationDisabled<R = void, P0 = cocoa.CDUnknownBlockType>(_withoutOptimizingAtEndRunBlockWithAutomaticOptimizationDisabled: P0): R;
    withAutomaticOptimizationDisabled<R = void, P0 = cocoa.CDUnknownBlockType>(_withAutomaticOptimizationDisabled: P0): R;
    _optimizeIfNotDisabled<R = boolean>(): R;
    withBehaviors_performModifications<R = void, P0 = number, P1 = cocoa.CDUnknownBlockType>(_withBehaviors: P0, _performModifications: P1): R;
    _flushPendingRemovals<R = void>(): R;
    _addObjectiveRow<R = void>(): R;
    rebuildFromConstraints<R = void>(): R;
    tryToOptimizeReturningMutuallyExclusiveConstraints<R = unknown>(): R;
    _optimizeWithoutRebuilding<R = number>(): R;
    optimize<R = number>(): R;
    replayCommandsData_verifyingIntegrity<R = number, P0 = unknown, P1 = boolean>(_replayCommandsData: P0, _verifyingIntegrity: P1): R;
    recordedCommandsData<R = unknown>(): R;
    beginRecording<R = void>(): R;
    valueRestrictionForEngineVarIndex<R = number, P0 = unknown>(_valueRestrictionForEngineVarIndex: P0): R;
    variableForEngineVarIndex<R = unknown, P0 = unknown>(_variableForEngineVarIndex: P0): R;
    engineVarIndexForVariable<R = unknown, P0 = unknown>(_engineVarIndexForVariable: P0): R;
    dealloc<R = void>(): R;
    tryUsingArtificialVariableToAddConstraintWithMarker_row_usingInfeasibilityHandlingBehavior_mutuallyExclusiveConstraints<R = boolean, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(_tryUsingArtificialVariableToAddConstraintWithMarker: P0, _row: P1, _usingInfeasibilityHandlingBehavior: P2, _mutuallyExclusiveConstraints: P3): R;
    tryAddingDirectly<R = boolean, P0 = unknown>(_tryAddingDirectly: P0): R;
    chooseHeadForRow_chosenCol_outNewToEngine<R = boolean, P0 = unknown, P1 = unknown, P2 = string>(_chooseHeadForRow: P0, _chosenCol: P1, _outNewToEngine: P2): R;
    copyExpressionSubstitutingRowHeadVariables_intoRow<R = void, P0 = unknown, P1 = unknown>(_copyExpressionSubstitutingRowHeadVariables: P0, _intoRow: P1): R;
    performModifications_withUnsatisfiableConstraintsHandler<R = void, P0 = cocoa.CDUnknownBlockType, P1 = cocoa.CDUnknownBlockType>(_performModifications: P0, _withUnsatisfiableConstraintsHandler: P1): R;
    fixUpValueRestrictionViolationsWithInfeasibilityHandlingBehavior<R = unknown, P0 = number>(_fixUpValueRestrictionViolationsWithInfeasibilityHandlingBehavior: P0): R;
    handleUnsatisfiableRow_usingInfeasibilityHandlingBehavior_prospectiveRowHead_mutuallyExclusiveConstraints<R = boolean, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown>(_handleUnsatisfiableRow: P0, _usingInfeasibilityHandlingBehavior: P1, _prospectiveRowHead: P2, _mutuallyExclusiveConstraints: P3): R;
    errorVariableIntroducedByBreakingConstraintWithMarker_errorIsPositive<R = unknown, P0 = unknown, P1 = boolean>(_errorVariableIntroducedByBreakingConstraintWithMarker: P0, _errorIsPositive: P1): R;
    replaceMarker_withMarkerPlusCoefficient_timesCol<R = void, P0 = unknown, P1 = number, P2 = unknown>(_replaceMarker: P0, _withMarkerPlusCoefficient: P1, _timesCol: P2): R;
    performPendingChangeNotificationsForItem<R = void, P0 = unknown>(_performPendingChangeNotificationsForItem: P0): R;
    performPendingChangeNotifications<R = void>(): R;
    isTrackingVariableChanges<R = boolean>(): R;
    _dirtyListRemoveObservable<R = void, P0 = unknown>(__dirtyListRemoveObservable: P0): R;
    _dirtyListPrependObservable<R = void, P0 = unknown>(__dirtyListPrependObservable: P0): R;
    _dirtyListContainsObservable<R = boolean, P0 = unknown>(__dirtyListContainsObservable: P0): R;
    addRowBody_times_toRow<R = void, P0 = unknown, P1 = number, P2 = unknown>(_addRowBody: P0, _times: P1, _toRow: P2): R;
    addRowBody_priority_times_toObjectiveRow<R = void, P0 = unknown, P1 = number, P2 = number, P3 = unknown>(_addRowBody: P0, _priority: P1, _times: P2, _toObjectiveRow: P3): R;
    _removeAllVariables<R = void>(): R;
    addCol_coefficient_toRow<R = void, P0 = unknown, P1 = number, P2 = unknown>(_addCol: P0, _coefficient: P1, _toRow: P2): R;
    addCol_priority_times_toObjectiveRow<R = void, P0 = unknown, P1 = number, P2 = number, P3 = unknown>(_addCol: P0, _priority: P1, _times: P2, _toObjectiveRow: P3): R;
    removeColFromAllRows<R = void, P0 = unknown>(_removeColFromAllRows: P0): R;
    integralizationAdjustmentForMarker<R = number, P0 = unknown>(_integralizationAdjustmentForMarker: P0): R;
    nsis_shouldIntegralizeVariable<R = boolean, P0 = unknown>(_nsis_shouldIntegralizeVariable: P0): R;
    markerForBrokenConstraintWithNegativeErrorVar<R = unknown, P0 = unknown>(_markerForBrokenConstraintWithNegativeErrorVar: P0): R;
    markerForBrokenConstraintWithPositiveErrorVar<R = unknown, P0 = unknown>(_markerForBrokenConstraintWithPositiveErrorVar: P0): R;
    setNegativeErrorVar_forBrokenConstraintWithMarker<R = void, P0 = unknown, P1 = unknown>(_setNegativeErrorVar: P0, _forBrokenConstraintWithMarker: P1): R;
    negativeErrorVarForBrokenConstraintWithMarker_errorVar<R = boolean, P0 = unknown, P1 = unknown>(_negativeErrorVarForBrokenConstraintWithMarker: P0, _errorVar: P1): R;
    _brokenConstraintNegativeErrorsIfAvailable<R = unknown>(): R;
    _brokenConstraintNegativeErrors<R = unknown>(): R;
    setPositiveErrorVar_forBrokenConstraintWithMarker<R = void, P0 = unknown, P1 = unknown>(_setPositiveErrorVar: P0, _forBrokenConstraintWithMarker: P1): R;
    positiveErrorVarForBrokenConstraintWithMarker_errorVar<R = boolean, P0 = unknown, P1 = unknown>(_positiveErrorVarForBrokenConstraintWithMarker: P0, _errorVar: P1): R;
    _brokenConstraintPositiveErrorsIfAvailable<R = unknown>(): R;
    _brokenConstraintPositiveErrors<R = unknown>(): R;
    enumerateCols<R = void, P0 = cocoa.CDUnknownBlockType>(_enumerateCols: P0): R;
    allRowHeads<R = unknown>(): R;
    enumerateRows<R = void, P0 = cocoa.CDUnknownBlockType>(_enumerateRows: P0): R;
    enumerateEngineVars<R = void, P0 = cocoa.CDUnknownBlockType>(_enumerateEngineVars: P0): R;
    traceState<R = unknown>(): R;
    _disambiguateFrame_forAmbiguousItem_withOldFrame<R = boolean, P0 = cocoa.CGRect, P1 = unknown, P2 = cocoa.CGRect>(__disambiguateFrame: P0, _forAmbiguousItem: P1, _withOldFrame: P2): R;
    engineScalingCoefficients<R = cocoa.CGSize>(): R;
    setEngineScalingCoefficients<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    revertsAfterUnsatisfiabilityHandler<R = boolean>(): R;
    setRevertsAfterUnsatisfiabilityHandler<R = void, P0 = boolean>(_v: P0): R;
    delegate<R = cocoa.NSISEngineDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSISEngineDelegate>(_v: P0): R;
    variablesWithValueRestrictionViolations<R = cocoa.NSMutableArray>(): R;
    setVariablesWithValueRestrictionViolations<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    description<R = cocoa.NSString>(): R;
    variableChangeCount<R = number>(): R;
    shouldIntegralize<R = boolean>(): R;
    setShouldIntegralize<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSISEngine<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSISVariableDelegateProtocol {
      alloc<R = NSISEngine>(): R;
      new: <R = NSISEngine>() => R;
      setLogOnInvalidUseFromBGThread<R = void, P0 = boolean>(_setLogOnInvalidUseFromBGThread: P0): R;
      _dbg_anyEngineContainsVariable<R = boolean, P0 = unknown>(__dbg_anyEngineContainsVariable: P0): R;
      setTraceFileSuffix<R = void, P0 = unknown>(_setTraceFileSuffix: P0): R;
      traceFileSuffix<R = unknown>(): R;
      enableEngineTrace<R = boolean>(): R;
      setEnableEngineTrace<R = void, P0 = boolean>(_setEnableEngineTrace: P0): R;
    }
  }
}

declare const NSISEngine: cocoa.classes.NSISEngine;
