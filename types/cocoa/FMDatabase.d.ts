/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FMDatabase<T0 = void, T1 = void, T2 = void> extends NSObject {
    makeFunctionNamed_maximumArguments_withBlock<R = void, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_makeFunctionNamed: P0, _maximumArguments: P1, _withBlock: P2): R;
    setShouldCacheStatements<R = void, P0 = boolean>(_setShouldCacheStatements: P0): R;
    shouldCacheStatements<R = boolean>(): R;
    inSavePoint<R = unknown, P0 = CDUnknownBlockType>(_inSavePoint: P0): R;
    rollbackToSavePointWithName_error<R = boolean, P0 = unknown, P1 = unknown>(_rollbackToSavePointWithName: P0, _error: P1): R;
    releaseSavePointWithName_error<R = boolean, P0 = unknown, P1 = unknown>(_releaseSavePointWithName: P0, _error: P1): R;
    startSavePointWithName_error<R = boolean, P0 = unknown, P1 = unknown>(_startSavePointWithName: P0, _error: P1): R;
    inTransaction<R = boolean>(): R;
    beginTransaction<R = boolean>(): R;
    beginDeferredTransaction<R = boolean>(): R;
    commit<R = boolean>(): R;
    rollback<R = boolean>(): R;
    update_withErrorAndBindings<R = boolean, P0 = unknown, P1 = unknown>(_update: P0, _withErrorAndBindings: P1): R;
    executeUpdate_withErrorAndBindings<R = boolean, P0 = unknown, P1 = unknown>(_executeUpdate: P0, _withErrorAndBindings: P1): R;
    executeStatements_withResultBlock<R = boolean, P0 = unknown, P1 = CDUnknownBlockType>(_executeStatements: P0, _withResultBlock: P1): R;
    executeStatements<R = boolean, P0 = unknown>(_executeStatements: P0): R;
    executeUpdateWithFormat<R = boolean, P0 = unknown>(_executeUpdateWithFormat: P0): R;
    executeUpdate_withVAList<R = boolean, P0 = unknown, P1 = __va_list_tag>(_executeUpdate: P0, _withVAList: P1): R;
    executeUpdate_withParameterDictionary<R = boolean, P0 = unknown, P1 = unknown>(_executeUpdate: P0, _withParameterDictionary: P1): R;
    executeUpdate_values_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_executeUpdate: P0, _values: P1, _error: P2): R;
    executeUpdate_withArgumentsInArray<R = boolean, P0 = unknown, P1 = unknown>(_executeUpdate: P0, _withArgumentsInArray: P1): R;
    executeUpdate<R = boolean, P0 = unknown>(_executeUpdate: P0): R;
    executeUpdate_error_withArgumentsInArray_orDictionary_orVAList<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = __va_list_tag>(_executeUpdate: P0, _error: P1, _withArgumentsInArray: P2, _orDictionary: P3, _orVAList: P4): R;
    executeQuery_withVAList<R = unknown, P0 = unknown, P1 = __va_list_tag>(_executeQuery: P0, _withVAList: P1): R;
    executeQuery_values_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_executeQuery: P0, _values: P1, _error: P2): R;
    executeQuery_withArgumentsInArray<R = unknown, P0 = unknown, P1 = unknown>(_executeQuery: P0, _withArgumentsInArray: P1): R;
    executeQueryWithFormat<R = unknown, P0 = unknown>(_executeQueryWithFormat: P0): R;
    executeQuery<R = unknown, P0 = unknown>(_executeQuery: P0): R;
    executeQuery_withArgumentsInArray_orDictionary_orVAList<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = __va_list_tag>(_executeQuery: P0, _withArgumentsInArray: P1, _orDictionary: P2, _orVAList: P3): R;
    executeQuery_withParameterDictionary<R = unknown, P0 = unknown, P1 = unknown>(_executeQuery: P0, _withParameterDictionary: P1): R;
    extractSQL_argumentsList_intoString_arguments<R = void, P0 = unknown, P1 = __va_list_tag, P2 = unknown, P3 = unknown>(_extractSQL: P0, _argumentsList: P1, _intoString: P2, _arguments: P3): R;
    bindObject_toColumn_inStatement<R = void, P0 = unknown, P1 = number, P2 = sqlite3_stmt>(_bindObject: P0, _toColumn: P1, _inStatement: P2): R;
    changes<R = number>(): R;
    lastInsertRowId<R = number>(): R;
    lastError<R = unknown>(): R;
    errorWithMessage<R = unknown, P0 = unknown>(_errorWithMessage: P0): R;
    lastErrorCode<R = number>(): R;
    hadError<R = boolean>(): R;
    lastErrorMessage<R = unknown>(): R;
    databaseExists<R = boolean>(): R;
    warnInUse<R = void>(): R;
    goodConnection<R = boolean>(): R;
    stringFromDate<R = unknown, P0 = unknown>(_stringFromDate: P0): R;
    dateFromString<R = unknown, P0 = unknown>(_dateFromString: P0): R;
    setDateFormat<R = void, P0 = unknown>(_setDateFormat: P0): R;
    hasDateFormatter<R = boolean>(): R;
    setKeyWithData<R = boolean, P0 = unknown>(_setKeyWithData: P0): R;
    setKey<R = boolean, P0 = unknown>(_setKey: P0): R;
    rekeyWithData<R = boolean, P0 = unknown>(_rekeyWithData: P0): R;
    rekey<R = boolean, P0 = unknown>(_rekey: P0): R;
    setCachedStatement_forQuery<R = void, P0 = unknown, P1 = unknown>(_setCachedStatement: P0, _forQuery: P1): R;
    cachedStatementForQuery<R = unknown, P0 = unknown>(_cachedStatementForQuery: P0): R;
    clearCachedStatements<R = void>(): R;
    resultSetDidClose<R = void, P0 = unknown>(_resultSetDidClose: P0): R;
    closeOpenResultSets<R = void>(): R;
    hasOpenResultSets<R = boolean>(): R;
    setBusyRetryTimeout<R = void, P0 = number>(_setBusyRetryTimeout: P0): R;
    busyRetryTimeout<R = number>(): R;
    maxBusyRetryTimeInterval<R = number>(): R;
    setMaxBusyRetryTimeInterval<R = void, P0 = number>(_setMaxBusyRetryTimeInterval: P0): R;
    close<R = boolean>(): R;
    openWithFlags_vfs<R = boolean, P0 = number, P1 = unknown>(_openWithFlags: P0, _vfs: P1): R;
    openWithFlags<R = boolean, P0 = number>(_openWithFlags: P0): R;
    open<R = boolean>(): R;
    sqlitePath<R = string>(): R;
    sqliteHandle<R = sqlite3>(): R;
    databasePath<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithPath<R = unknown, P0 = unknown>(_initWithPath: P0): R;
    validateSQL_error<R = boolean, P0 = unknown, P1 = unknown>(_validateSQL: P0, _error: P1): R;
    columnExists_columnName<R = boolean, P0 = unknown, P1 = unknown>(_columnExists: P0, _columnName: P1): R;
    setUserVersion<R = void, P0 = number>(_setUserVersion: P0): R;
    userVersion<R = number>(): R;
    setApplicationIDString<R = void, P0 = unknown>(_setApplicationIDString: P0): R;
    applicationIDString<R = unknown>(): R;
    setApplicationID<R = void, P0 = number>(_setApplicationID: P0): R;
    applicationID<R = number>(): R;
    columnExists_inTableWithName<R = boolean, P0 = unknown, P1 = unknown>(_columnExists: P0, _inTableWithName: P1): R;
    getTableSchema<R = unknown, P0 = unknown>(_getTableSchema: P0): R;
    getSchema<R = unknown>(): R;
    tableExists<R = boolean, P0 = unknown>(_tableExists: P0): R;
    dateForQuery<R = unknown, P0 = unknown>(_dateForQuery: P0): R;
    dataForQuery<R = unknown, P0 = unknown>(_dataForQuery: P0): R;
    doubleForQuery<R = number, P0 = unknown>(_doubleForQuery: P0): R;
    boolForQuery<R = boolean, P0 = unknown>(_boolForQuery: P0): R;
    longForQuery<R = number, P0 = unknown>(_longForQuery: P0): R;
    intForQuery<R = number, P0 = unknown>(_intForQuery: P0): R;
    stringForQuery<R = unknown, P0 = unknown>(_stringForQuery: P0): R;
    traceExecution<R = boolean>(): R;
    setTraceExecution<R = void, P0 = boolean>(_v: P0): R;
    checkedOut<R = boolean>(): R;
    setCheckedOut<R = void, P0 = boolean>(_v: P0): R;
    crashOnErrors<R = boolean>(): R;
    setCrashOnErrors<R = void, P0 = boolean>(_v: P0): R;
    logsErrors<R = boolean>(): R;
    setLogsErrors<R = void, P0 = boolean>(_v: P0): R;
    cachedStatements<R = NSMutableDictionary>(): R;
    setCachedStatements<R = void, P0 = NSMutableDictionary>(_v: P0): R;
  }
  namespace FMDatabase {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = FMDatabase>(): R;
      new: <R = FMDatabase>() => R;
      storeableDateFormat<R = unknown, P0 = unknown>(_storeableDateFormat: P0): R;
      isSQLiteThreadSafe<R = boolean>(): R;
      sqliteLibVersion<R = unknown>(): R;
      FMDBVersion<R = number>(): R;
      FMDBUserVersion<R = unknown>(): R;
      databaseWithPath<R = unknown, P0 = unknown>(_databaseWithPath: P0): R;
    }
  }
}

declare const FMDatabase: cocoa.FMDatabase.CLASS;
