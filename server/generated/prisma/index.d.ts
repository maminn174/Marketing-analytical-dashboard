
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DirectImportBatch
 * 
 */
export type DirectImportBatch = $Result.DefaultSelection<Prisma.$DirectImportBatchPayload>
/**
 * Model DirectDailyPhraseStat
 * 
 */
export type DirectDailyPhraseStat = $Result.DefaultSelection<Prisma.$DirectDailyPhraseStatPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more DirectImportBatches
 * const directImportBatches = await prisma.directImportBatch.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more DirectImportBatches
   * const directImportBatches = await prisma.directImportBatch.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.directImportBatch`: Exposes CRUD operations for the **DirectImportBatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DirectImportBatches
    * const directImportBatches = await prisma.directImportBatch.findMany()
    * ```
    */
  get directImportBatch(): Prisma.DirectImportBatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.directDailyPhraseStat`: Exposes CRUD operations for the **DirectDailyPhraseStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DirectDailyPhraseStats
    * const directDailyPhraseStats = await prisma.directDailyPhraseStat.findMany()
    * ```
    */
  get directDailyPhraseStat(): Prisma.DirectDailyPhraseStatDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    DirectImportBatch: 'DirectImportBatch',
    DirectDailyPhraseStat: 'DirectDailyPhraseStat'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "directImportBatch" | "directDailyPhraseStat"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DirectImportBatch: {
        payload: Prisma.$DirectImportBatchPayload<ExtArgs>
        fields: Prisma.DirectImportBatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DirectImportBatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectImportBatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DirectImportBatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectImportBatchPayload>
          }
          findFirst: {
            args: Prisma.DirectImportBatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectImportBatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DirectImportBatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectImportBatchPayload>
          }
          findMany: {
            args: Prisma.DirectImportBatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectImportBatchPayload>[]
          }
          create: {
            args: Prisma.DirectImportBatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectImportBatchPayload>
          }
          createMany: {
            args: Prisma.DirectImportBatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DirectImportBatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectImportBatchPayload>[]
          }
          delete: {
            args: Prisma.DirectImportBatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectImportBatchPayload>
          }
          update: {
            args: Prisma.DirectImportBatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectImportBatchPayload>
          }
          deleteMany: {
            args: Prisma.DirectImportBatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DirectImportBatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DirectImportBatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectImportBatchPayload>[]
          }
          upsert: {
            args: Prisma.DirectImportBatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectImportBatchPayload>
          }
          aggregate: {
            args: Prisma.DirectImportBatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDirectImportBatch>
          }
          groupBy: {
            args: Prisma.DirectImportBatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<DirectImportBatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.DirectImportBatchCountArgs<ExtArgs>
            result: $Utils.Optional<DirectImportBatchCountAggregateOutputType> | number
          }
        }
      }
      DirectDailyPhraseStat: {
        payload: Prisma.$DirectDailyPhraseStatPayload<ExtArgs>
        fields: Prisma.DirectDailyPhraseStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DirectDailyPhraseStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectDailyPhraseStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DirectDailyPhraseStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectDailyPhraseStatPayload>
          }
          findFirst: {
            args: Prisma.DirectDailyPhraseStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectDailyPhraseStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DirectDailyPhraseStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectDailyPhraseStatPayload>
          }
          findMany: {
            args: Prisma.DirectDailyPhraseStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectDailyPhraseStatPayload>[]
          }
          create: {
            args: Prisma.DirectDailyPhraseStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectDailyPhraseStatPayload>
          }
          createMany: {
            args: Prisma.DirectDailyPhraseStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DirectDailyPhraseStatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectDailyPhraseStatPayload>[]
          }
          delete: {
            args: Prisma.DirectDailyPhraseStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectDailyPhraseStatPayload>
          }
          update: {
            args: Prisma.DirectDailyPhraseStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectDailyPhraseStatPayload>
          }
          deleteMany: {
            args: Prisma.DirectDailyPhraseStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DirectDailyPhraseStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DirectDailyPhraseStatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectDailyPhraseStatPayload>[]
          }
          upsert: {
            args: Prisma.DirectDailyPhraseStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectDailyPhraseStatPayload>
          }
          aggregate: {
            args: Prisma.DirectDailyPhraseStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDirectDailyPhraseStat>
          }
          groupBy: {
            args: Prisma.DirectDailyPhraseStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<DirectDailyPhraseStatGroupByOutputType>[]
          }
          count: {
            args: Prisma.DirectDailyPhraseStatCountArgs<ExtArgs>
            result: $Utils.Optional<DirectDailyPhraseStatCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    directImportBatch?: DirectImportBatchOmit
    directDailyPhraseStat?: DirectDailyPhraseStatOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DirectImportBatchCountOutputType
   */

  export type DirectImportBatchCountOutputType = {
    stats: number
  }

  export type DirectImportBatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stats?: boolean | DirectImportBatchCountOutputTypeCountStatsArgs
  }

  // Custom InputTypes
  /**
   * DirectImportBatchCountOutputType without action
   */
  export type DirectImportBatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectImportBatchCountOutputType
     */
    select?: DirectImportBatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DirectImportBatchCountOutputType without action
   */
  export type DirectImportBatchCountOutputTypeCountStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectDailyPhraseStatWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DirectImportBatch
   */

  export type AggregateDirectImportBatch = {
    _count: DirectImportBatchCountAggregateOutputType | null
    _avg: DirectImportBatchAvgAggregateOutputType | null
    _sum: DirectImportBatchSumAggregateOutputType | null
    _min: DirectImportBatchMinAggregateOutputType | null
    _max: DirectImportBatchMaxAggregateOutputType | null
  }

  export type DirectImportBatchAvgAggregateOutputType = {
    rowsTotal: number | null
    rowsImported: number | null
    rowsSkipped: number | null
  }

  export type DirectImportBatchSumAggregateOutputType = {
    rowsTotal: number | null
    rowsImported: number | null
    rowsSkipped: number | null
  }

  export type DirectImportBatchMinAggregateOutputType = {
    id: string | null
    fileName: string | null
    importedAt: Date | null
    rowsTotal: number | null
    rowsImported: number | null
    rowsSkipped: number | null
  }

  export type DirectImportBatchMaxAggregateOutputType = {
    id: string | null
    fileName: string | null
    importedAt: Date | null
    rowsTotal: number | null
    rowsImported: number | null
    rowsSkipped: number | null
  }

  export type DirectImportBatchCountAggregateOutputType = {
    id: number
    fileName: number
    importedAt: number
    rowsTotal: number
    rowsImported: number
    rowsSkipped: number
    _all: number
  }


  export type DirectImportBatchAvgAggregateInputType = {
    rowsTotal?: true
    rowsImported?: true
    rowsSkipped?: true
  }

  export type DirectImportBatchSumAggregateInputType = {
    rowsTotal?: true
    rowsImported?: true
    rowsSkipped?: true
  }

  export type DirectImportBatchMinAggregateInputType = {
    id?: true
    fileName?: true
    importedAt?: true
    rowsTotal?: true
    rowsImported?: true
    rowsSkipped?: true
  }

  export type DirectImportBatchMaxAggregateInputType = {
    id?: true
    fileName?: true
    importedAt?: true
    rowsTotal?: true
    rowsImported?: true
    rowsSkipped?: true
  }

  export type DirectImportBatchCountAggregateInputType = {
    id?: true
    fileName?: true
    importedAt?: true
    rowsTotal?: true
    rowsImported?: true
    rowsSkipped?: true
    _all?: true
  }

  export type DirectImportBatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DirectImportBatch to aggregate.
     */
    where?: DirectImportBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectImportBatches to fetch.
     */
    orderBy?: DirectImportBatchOrderByWithRelationInput | DirectImportBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DirectImportBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectImportBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectImportBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DirectImportBatches
    **/
    _count?: true | DirectImportBatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DirectImportBatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DirectImportBatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectImportBatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectImportBatchMaxAggregateInputType
  }

  export type GetDirectImportBatchAggregateType<T extends DirectImportBatchAggregateArgs> = {
        [P in keyof T & keyof AggregateDirectImportBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirectImportBatch[P]>
      : GetScalarType<T[P], AggregateDirectImportBatch[P]>
  }




  export type DirectImportBatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectImportBatchWhereInput
    orderBy?: DirectImportBatchOrderByWithAggregationInput | DirectImportBatchOrderByWithAggregationInput[]
    by: DirectImportBatchScalarFieldEnum[] | DirectImportBatchScalarFieldEnum
    having?: DirectImportBatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectImportBatchCountAggregateInputType | true
    _avg?: DirectImportBatchAvgAggregateInputType
    _sum?: DirectImportBatchSumAggregateInputType
    _min?: DirectImportBatchMinAggregateInputType
    _max?: DirectImportBatchMaxAggregateInputType
  }

  export type DirectImportBatchGroupByOutputType = {
    id: string
    fileName: string
    importedAt: Date
    rowsTotal: number
    rowsImported: number
    rowsSkipped: number
    _count: DirectImportBatchCountAggregateOutputType | null
    _avg: DirectImportBatchAvgAggregateOutputType | null
    _sum: DirectImportBatchSumAggregateOutputType | null
    _min: DirectImportBatchMinAggregateOutputType | null
    _max: DirectImportBatchMaxAggregateOutputType | null
  }

  type GetDirectImportBatchGroupByPayload<T extends DirectImportBatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DirectImportBatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectImportBatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectImportBatchGroupByOutputType[P]>
            : GetScalarType<T[P], DirectImportBatchGroupByOutputType[P]>
        }
      >
    >


  export type DirectImportBatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    importedAt?: boolean
    rowsTotal?: boolean
    rowsImported?: boolean
    rowsSkipped?: boolean
    stats?: boolean | DirectImportBatch$statsArgs<ExtArgs>
    _count?: boolean | DirectImportBatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["directImportBatch"]>

  export type DirectImportBatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    importedAt?: boolean
    rowsTotal?: boolean
    rowsImported?: boolean
    rowsSkipped?: boolean
  }, ExtArgs["result"]["directImportBatch"]>

  export type DirectImportBatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    importedAt?: boolean
    rowsTotal?: boolean
    rowsImported?: boolean
    rowsSkipped?: boolean
  }, ExtArgs["result"]["directImportBatch"]>

  export type DirectImportBatchSelectScalar = {
    id?: boolean
    fileName?: boolean
    importedAt?: boolean
    rowsTotal?: boolean
    rowsImported?: boolean
    rowsSkipped?: boolean
  }

  export type DirectImportBatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileName" | "importedAt" | "rowsTotal" | "rowsImported" | "rowsSkipped", ExtArgs["result"]["directImportBatch"]>
  export type DirectImportBatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stats?: boolean | DirectImportBatch$statsArgs<ExtArgs>
    _count?: boolean | DirectImportBatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DirectImportBatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DirectImportBatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DirectImportBatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DirectImportBatch"
    objects: {
      stats: Prisma.$DirectDailyPhraseStatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileName: string
      importedAt: Date
      rowsTotal: number
      rowsImported: number
      rowsSkipped: number
    }, ExtArgs["result"]["directImportBatch"]>
    composites: {}
  }

  type DirectImportBatchGetPayload<S extends boolean | null | undefined | DirectImportBatchDefaultArgs> = $Result.GetResult<Prisma.$DirectImportBatchPayload, S>

  type DirectImportBatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DirectImportBatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DirectImportBatchCountAggregateInputType | true
    }

  export interface DirectImportBatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DirectImportBatch'], meta: { name: 'DirectImportBatch' } }
    /**
     * Find zero or one DirectImportBatch that matches the filter.
     * @param {DirectImportBatchFindUniqueArgs} args - Arguments to find a DirectImportBatch
     * @example
     * // Get one DirectImportBatch
     * const directImportBatch = await prisma.directImportBatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DirectImportBatchFindUniqueArgs>(args: SelectSubset<T, DirectImportBatchFindUniqueArgs<ExtArgs>>): Prisma__DirectImportBatchClient<$Result.GetResult<Prisma.$DirectImportBatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DirectImportBatch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DirectImportBatchFindUniqueOrThrowArgs} args - Arguments to find a DirectImportBatch
     * @example
     * // Get one DirectImportBatch
     * const directImportBatch = await prisma.directImportBatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DirectImportBatchFindUniqueOrThrowArgs>(args: SelectSubset<T, DirectImportBatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DirectImportBatchClient<$Result.GetResult<Prisma.$DirectImportBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DirectImportBatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectImportBatchFindFirstArgs} args - Arguments to find a DirectImportBatch
     * @example
     * // Get one DirectImportBatch
     * const directImportBatch = await prisma.directImportBatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DirectImportBatchFindFirstArgs>(args?: SelectSubset<T, DirectImportBatchFindFirstArgs<ExtArgs>>): Prisma__DirectImportBatchClient<$Result.GetResult<Prisma.$DirectImportBatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DirectImportBatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectImportBatchFindFirstOrThrowArgs} args - Arguments to find a DirectImportBatch
     * @example
     * // Get one DirectImportBatch
     * const directImportBatch = await prisma.directImportBatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DirectImportBatchFindFirstOrThrowArgs>(args?: SelectSubset<T, DirectImportBatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__DirectImportBatchClient<$Result.GetResult<Prisma.$DirectImportBatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DirectImportBatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectImportBatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DirectImportBatches
     * const directImportBatches = await prisma.directImportBatch.findMany()
     * 
     * // Get first 10 DirectImportBatches
     * const directImportBatches = await prisma.directImportBatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const directImportBatchWithIdOnly = await prisma.directImportBatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DirectImportBatchFindManyArgs>(args?: SelectSubset<T, DirectImportBatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectImportBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DirectImportBatch.
     * @param {DirectImportBatchCreateArgs} args - Arguments to create a DirectImportBatch.
     * @example
     * // Create one DirectImportBatch
     * const DirectImportBatch = await prisma.directImportBatch.create({
     *   data: {
     *     // ... data to create a DirectImportBatch
     *   }
     * })
     * 
     */
    create<T extends DirectImportBatchCreateArgs>(args: SelectSubset<T, DirectImportBatchCreateArgs<ExtArgs>>): Prisma__DirectImportBatchClient<$Result.GetResult<Prisma.$DirectImportBatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DirectImportBatches.
     * @param {DirectImportBatchCreateManyArgs} args - Arguments to create many DirectImportBatches.
     * @example
     * // Create many DirectImportBatches
     * const directImportBatch = await prisma.directImportBatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DirectImportBatchCreateManyArgs>(args?: SelectSubset<T, DirectImportBatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DirectImportBatches and returns the data saved in the database.
     * @param {DirectImportBatchCreateManyAndReturnArgs} args - Arguments to create many DirectImportBatches.
     * @example
     * // Create many DirectImportBatches
     * const directImportBatch = await prisma.directImportBatch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DirectImportBatches and only return the `id`
     * const directImportBatchWithIdOnly = await prisma.directImportBatch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DirectImportBatchCreateManyAndReturnArgs>(args?: SelectSubset<T, DirectImportBatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectImportBatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DirectImportBatch.
     * @param {DirectImportBatchDeleteArgs} args - Arguments to delete one DirectImportBatch.
     * @example
     * // Delete one DirectImportBatch
     * const DirectImportBatch = await prisma.directImportBatch.delete({
     *   where: {
     *     // ... filter to delete one DirectImportBatch
     *   }
     * })
     * 
     */
    delete<T extends DirectImportBatchDeleteArgs>(args: SelectSubset<T, DirectImportBatchDeleteArgs<ExtArgs>>): Prisma__DirectImportBatchClient<$Result.GetResult<Prisma.$DirectImportBatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DirectImportBatch.
     * @param {DirectImportBatchUpdateArgs} args - Arguments to update one DirectImportBatch.
     * @example
     * // Update one DirectImportBatch
     * const directImportBatch = await prisma.directImportBatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DirectImportBatchUpdateArgs>(args: SelectSubset<T, DirectImportBatchUpdateArgs<ExtArgs>>): Prisma__DirectImportBatchClient<$Result.GetResult<Prisma.$DirectImportBatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DirectImportBatches.
     * @param {DirectImportBatchDeleteManyArgs} args - Arguments to filter DirectImportBatches to delete.
     * @example
     * // Delete a few DirectImportBatches
     * const { count } = await prisma.directImportBatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DirectImportBatchDeleteManyArgs>(args?: SelectSubset<T, DirectImportBatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DirectImportBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectImportBatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DirectImportBatches
     * const directImportBatch = await prisma.directImportBatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DirectImportBatchUpdateManyArgs>(args: SelectSubset<T, DirectImportBatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DirectImportBatches and returns the data updated in the database.
     * @param {DirectImportBatchUpdateManyAndReturnArgs} args - Arguments to update many DirectImportBatches.
     * @example
     * // Update many DirectImportBatches
     * const directImportBatch = await prisma.directImportBatch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DirectImportBatches and only return the `id`
     * const directImportBatchWithIdOnly = await prisma.directImportBatch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DirectImportBatchUpdateManyAndReturnArgs>(args: SelectSubset<T, DirectImportBatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectImportBatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DirectImportBatch.
     * @param {DirectImportBatchUpsertArgs} args - Arguments to update or create a DirectImportBatch.
     * @example
     * // Update or create a DirectImportBatch
     * const directImportBatch = await prisma.directImportBatch.upsert({
     *   create: {
     *     // ... data to create a DirectImportBatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DirectImportBatch we want to update
     *   }
     * })
     */
    upsert<T extends DirectImportBatchUpsertArgs>(args: SelectSubset<T, DirectImportBatchUpsertArgs<ExtArgs>>): Prisma__DirectImportBatchClient<$Result.GetResult<Prisma.$DirectImportBatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DirectImportBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectImportBatchCountArgs} args - Arguments to filter DirectImportBatches to count.
     * @example
     * // Count the number of DirectImportBatches
     * const count = await prisma.directImportBatch.count({
     *   where: {
     *     // ... the filter for the DirectImportBatches we want to count
     *   }
     * })
    **/
    count<T extends DirectImportBatchCountArgs>(
      args?: Subset<T, DirectImportBatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectImportBatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DirectImportBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectImportBatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DirectImportBatchAggregateArgs>(args: Subset<T, DirectImportBatchAggregateArgs>): Prisma.PrismaPromise<GetDirectImportBatchAggregateType<T>>

    /**
     * Group by DirectImportBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectImportBatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DirectImportBatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirectImportBatchGroupByArgs['orderBy'] }
        : { orderBy?: DirectImportBatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DirectImportBatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectImportBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DirectImportBatch model
   */
  readonly fields: DirectImportBatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DirectImportBatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DirectImportBatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stats<T extends DirectImportBatch$statsArgs<ExtArgs> = {}>(args?: Subset<T, DirectImportBatch$statsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectDailyPhraseStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DirectImportBatch model
   */
  interface DirectImportBatchFieldRefs {
    readonly id: FieldRef<"DirectImportBatch", 'String'>
    readonly fileName: FieldRef<"DirectImportBatch", 'String'>
    readonly importedAt: FieldRef<"DirectImportBatch", 'DateTime'>
    readonly rowsTotal: FieldRef<"DirectImportBatch", 'Int'>
    readonly rowsImported: FieldRef<"DirectImportBatch", 'Int'>
    readonly rowsSkipped: FieldRef<"DirectImportBatch", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DirectImportBatch findUnique
   */
  export type DirectImportBatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectImportBatch
     */
    select?: DirectImportBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectImportBatch
     */
    omit?: DirectImportBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectImportBatchInclude<ExtArgs> | null
    /**
     * Filter, which DirectImportBatch to fetch.
     */
    where: DirectImportBatchWhereUniqueInput
  }

  /**
   * DirectImportBatch findUniqueOrThrow
   */
  export type DirectImportBatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectImportBatch
     */
    select?: DirectImportBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectImportBatch
     */
    omit?: DirectImportBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectImportBatchInclude<ExtArgs> | null
    /**
     * Filter, which DirectImportBatch to fetch.
     */
    where: DirectImportBatchWhereUniqueInput
  }

  /**
   * DirectImportBatch findFirst
   */
  export type DirectImportBatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectImportBatch
     */
    select?: DirectImportBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectImportBatch
     */
    omit?: DirectImportBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectImportBatchInclude<ExtArgs> | null
    /**
     * Filter, which DirectImportBatch to fetch.
     */
    where?: DirectImportBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectImportBatches to fetch.
     */
    orderBy?: DirectImportBatchOrderByWithRelationInput | DirectImportBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectImportBatches.
     */
    cursor?: DirectImportBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectImportBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectImportBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectImportBatches.
     */
    distinct?: DirectImportBatchScalarFieldEnum | DirectImportBatchScalarFieldEnum[]
  }

  /**
   * DirectImportBatch findFirstOrThrow
   */
  export type DirectImportBatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectImportBatch
     */
    select?: DirectImportBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectImportBatch
     */
    omit?: DirectImportBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectImportBatchInclude<ExtArgs> | null
    /**
     * Filter, which DirectImportBatch to fetch.
     */
    where?: DirectImportBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectImportBatches to fetch.
     */
    orderBy?: DirectImportBatchOrderByWithRelationInput | DirectImportBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectImportBatches.
     */
    cursor?: DirectImportBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectImportBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectImportBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectImportBatches.
     */
    distinct?: DirectImportBatchScalarFieldEnum | DirectImportBatchScalarFieldEnum[]
  }

  /**
   * DirectImportBatch findMany
   */
  export type DirectImportBatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectImportBatch
     */
    select?: DirectImportBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectImportBatch
     */
    omit?: DirectImportBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectImportBatchInclude<ExtArgs> | null
    /**
     * Filter, which DirectImportBatches to fetch.
     */
    where?: DirectImportBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectImportBatches to fetch.
     */
    orderBy?: DirectImportBatchOrderByWithRelationInput | DirectImportBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DirectImportBatches.
     */
    cursor?: DirectImportBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectImportBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectImportBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectImportBatches.
     */
    distinct?: DirectImportBatchScalarFieldEnum | DirectImportBatchScalarFieldEnum[]
  }

  /**
   * DirectImportBatch create
   */
  export type DirectImportBatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectImportBatch
     */
    select?: DirectImportBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectImportBatch
     */
    omit?: DirectImportBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectImportBatchInclude<ExtArgs> | null
    /**
     * The data needed to create a DirectImportBatch.
     */
    data: XOR<DirectImportBatchCreateInput, DirectImportBatchUncheckedCreateInput>
  }

  /**
   * DirectImportBatch createMany
   */
  export type DirectImportBatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DirectImportBatches.
     */
    data: DirectImportBatchCreateManyInput | DirectImportBatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DirectImportBatch createManyAndReturn
   */
  export type DirectImportBatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectImportBatch
     */
    select?: DirectImportBatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DirectImportBatch
     */
    omit?: DirectImportBatchOmit<ExtArgs> | null
    /**
     * The data used to create many DirectImportBatches.
     */
    data: DirectImportBatchCreateManyInput | DirectImportBatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DirectImportBatch update
   */
  export type DirectImportBatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectImportBatch
     */
    select?: DirectImportBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectImportBatch
     */
    omit?: DirectImportBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectImportBatchInclude<ExtArgs> | null
    /**
     * The data needed to update a DirectImportBatch.
     */
    data: XOR<DirectImportBatchUpdateInput, DirectImportBatchUncheckedUpdateInput>
    /**
     * Choose, which DirectImportBatch to update.
     */
    where: DirectImportBatchWhereUniqueInput
  }

  /**
   * DirectImportBatch updateMany
   */
  export type DirectImportBatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DirectImportBatches.
     */
    data: XOR<DirectImportBatchUpdateManyMutationInput, DirectImportBatchUncheckedUpdateManyInput>
    /**
     * Filter which DirectImportBatches to update
     */
    where?: DirectImportBatchWhereInput
    /**
     * Limit how many DirectImportBatches to update.
     */
    limit?: number
  }

  /**
   * DirectImportBatch updateManyAndReturn
   */
  export type DirectImportBatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectImportBatch
     */
    select?: DirectImportBatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DirectImportBatch
     */
    omit?: DirectImportBatchOmit<ExtArgs> | null
    /**
     * The data used to update DirectImportBatches.
     */
    data: XOR<DirectImportBatchUpdateManyMutationInput, DirectImportBatchUncheckedUpdateManyInput>
    /**
     * Filter which DirectImportBatches to update
     */
    where?: DirectImportBatchWhereInput
    /**
     * Limit how many DirectImportBatches to update.
     */
    limit?: number
  }

  /**
   * DirectImportBatch upsert
   */
  export type DirectImportBatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectImportBatch
     */
    select?: DirectImportBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectImportBatch
     */
    omit?: DirectImportBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectImportBatchInclude<ExtArgs> | null
    /**
     * The filter to search for the DirectImportBatch to update in case it exists.
     */
    where: DirectImportBatchWhereUniqueInput
    /**
     * In case the DirectImportBatch found by the `where` argument doesn't exist, create a new DirectImportBatch with this data.
     */
    create: XOR<DirectImportBatchCreateInput, DirectImportBatchUncheckedCreateInput>
    /**
     * In case the DirectImportBatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DirectImportBatchUpdateInput, DirectImportBatchUncheckedUpdateInput>
  }

  /**
   * DirectImportBatch delete
   */
  export type DirectImportBatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectImportBatch
     */
    select?: DirectImportBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectImportBatch
     */
    omit?: DirectImportBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectImportBatchInclude<ExtArgs> | null
    /**
     * Filter which DirectImportBatch to delete.
     */
    where: DirectImportBatchWhereUniqueInput
  }

  /**
   * DirectImportBatch deleteMany
   */
  export type DirectImportBatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DirectImportBatches to delete
     */
    where?: DirectImportBatchWhereInput
    /**
     * Limit how many DirectImportBatches to delete.
     */
    limit?: number
  }

  /**
   * DirectImportBatch.stats
   */
  export type DirectImportBatch$statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectDailyPhraseStat
     */
    select?: DirectDailyPhraseStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectDailyPhraseStat
     */
    omit?: DirectDailyPhraseStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectDailyPhraseStatInclude<ExtArgs> | null
    where?: DirectDailyPhraseStatWhereInput
    orderBy?: DirectDailyPhraseStatOrderByWithRelationInput | DirectDailyPhraseStatOrderByWithRelationInput[]
    cursor?: DirectDailyPhraseStatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DirectDailyPhraseStatScalarFieldEnum | DirectDailyPhraseStatScalarFieldEnum[]
  }

  /**
   * DirectImportBatch without action
   */
  export type DirectImportBatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectImportBatch
     */
    select?: DirectImportBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectImportBatch
     */
    omit?: DirectImportBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectImportBatchInclude<ExtArgs> | null
  }


  /**
   * Model DirectDailyPhraseStat
   */

  export type AggregateDirectDailyPhraseStat = {
    _count: DirectDailyPhraseStatCountAggregateOutputType | null
    _avg: DirectDailyPhraseStatAvgAggregateOutputType | null
    _sum: DirectDailyPhraseStatSumAggregateOutputType | null
    _min: DirectDailyPhraseStatMinAggregateOutputType | null
    _max: DirectDailyPhraseStatMaxAggregateOutputType | null
  }

  export type DirectDailyPhraseStatAvgAggregateOutputType = {
    spend: Decimal | null
    clicks: number | null
    directConversions: number | null
    impressions: number | null
    avgBidPerClick: Decimal | null
    avgImpressionPosition: Decimal | null
  }

  export type DirectDailyPhraseStatSumAggregateOutputType = {
    spend: Decimal | null
    clicks: number | null
    directConversions: number | null
    impressions: number | null
    avgBidPerClick: Decimal | null
    avgImpressionPosition: Decimal | null
  }

  export type DirectDailyPhraseStatMinAggregateOutputType = {
    id: string | null
    importBatchId: string | null
    statDate: Date | null
    campaignId: string | null
    campaignName: string | null
    adGroupId: string | null
    adGroupName: string | null
    criteriaType: string | null
    keywordText: string | null
    targetRegionName: string | null
    targetRegionId: string | null
    deviceType: string | null
    spend: Decimal | null
    clicks: number | null
    directConversions: number | null
    impressions: number | null
    avgBidPerClick: Decimal | null
    avgImpressionPosition: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DirectDailyPhraseStatMaxAggregateOutputType = {
    id: string | null
    importBatchId: string | null
    statDate: Date | null
    campaignId: string | null
    campaignName: string | null
    adGroupId: string | null
    adGroupName: string | null
    criteriaType: string | null
    keywordText: string | null
    targetRegionName: string | null
    targetRegionId: string | null
    deviceType: string | null
    spend: Decimal | null
    clicks: number | null
    directConversions: number | null
    impressions: number | null
    avgBidPerClick: Decimal | null
    avgImpressionPosition: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DirectDailyPhraseStatCountAggregateOutputType = {
    id: number
    importBatchId: number
    statDate: number
    campaignId: number
    campaignName: number
    adGroupId: number
    adGroupName: number
    criteriaType: number
    keywordText: number
    targetRegionName: number
    targetRegionId: number
    deviceType: number
    spend: number
    clicks: number
    directConversions: number
    impressions: number
    avgBidPerClick: number
    avgImpressionPosition: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DirectDailyPhraseStatAvgAggregateInputType = {
    spend?: true
    clicks?: true
    directConversions?: true
    impressions?: true
    avgBidPerClick?: true
    avgImpressionPosition?: true
  }

  export type DirectDailyPhraseStatSumAggregateInputType = {
    spend?: true
    clicks?: true
    directConversions?: true
    impressions?: true
    avgBidPerClick?: true
    avgImpressionPosition?: true
  }

  export type DirectDailyPhraseStatMinAggregateInputType = {
    id?: true
    importBatchId?: true
    statDate?: true
    campaignId?: true
    campaignName?: true
    adGroupId?: true
    adGroupName?: true
    criteriaType?: true
    keywordText?: true
    targetRegionName?: true
    targetRegionId?: true
    deviceType?: true
    spend?: true
    clicks?: true
    directConversions?: true
    impressions?: true
    avgBidPerClick?: true
    avgImpressionPosition?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DirectDailyPhraseStatMaxAggregateInputType = {
    id?: true
    importBatchId?: true
    statDate?: true
    campaignId?: true
    campaignName?: true
    adGroupId?: true
    adGroupName?: true
    criteriaType?: true
    keywordText?: true
    targetRegionName?: true
    targetRegionId?: true
    deviceType?: true
    spend?: true
    clicks?: true
    directConversions?: true
    impressions?: true
    avgBidPerClick?: true
    avgImpressionPosition?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DirectDailyPhraseStatCountAggregateInputType = {
    id?: true
    importBatchId?: true
    statDate?: true
    campaignId?: true
    campaignName?: true
    adGroupId?: true
    adGroupName?: true
    criteriaType?: true
    keywordText?: true
    targetRegionName?: true
    targetRegionId?: true
    deviceType?: true
    spend?: true
    clicks?: true
    directConversions?: true
    impressions?: true
    avgBidPerClick?: true
    avgImpressionPosition?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DirectDailyPhraseStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DirectDailyPhraseStat to aggregate.
     */
    where?: DirectDailyPhraseStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectDailyPhraseStats to fetch.
     */
    orderBy?: DirectDailyPhraseStatOrderByWithRelationInput | DirectDailyPhraseStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DirectDailyPhraseStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectDailyPhraseStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectDailyPhraseStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DirectDailyPhraseStats
    **/
    _count?: true | DirectDailyPhraseStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DirectDailyPhraseStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DirectDailyPhraseStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectDailyPhraseStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectDailyPhraseStatMaxAggregateInputType
  }

  export type GetDirectDailyPhraseStatAggregateType<T extends DirectDailyPhraseStatAggregateArgs> = {
        [P in keyof T & keyof AggregateDirectDailyPhraseStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirectDailyPhraseStat[P]>
      : GetScalarType<T[P], AggregateDirectDailyPhraseStat[P]>
  }




  export type DirectDailyPhraseStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectDailyPhraseStatWhereInput
    orderBy?: DirectDailyPhraseStatOrderByWithAggregationInput | DirectDailyPhraseStatOrderByWithAggregationInput[]
    by: DirectDailyPhraseStatScalarFieldEnum[] | DirectDailyPhraseStatScalarFieldEnum
    having?: DirectDailyPhraseStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectDailyPhraseStatCountAggregateInputType | true
    _avg?: DirectDailyPhraseStatAvgAggregateInputType
    _sum?: DirectDailyPhraseStatSumAggregateInputType
    _min?: DirectDailyPhraseStatMinAggregateInputType
    _max?: DirectDailyPhraseStatMaxAggregateInputType
  }

  export type DirectDailyPhraseStatGroupByOutputType = {
    id: string
    importBatchId: string
    statDate: Date
    campaignId: string
    campaignName: string
    adGroupId: string
    adGroupName: string
    criteriaType: string
    keywordText: string
    targetRegionName: string
    targetRegionId: string
    deviceType: string
    spend: Decimal
    clicks: number
    directConversions: number
    impressions: number
    avgBidPerClick: Decimal
    avgImpressionPosition: Decimal
    createdAt: Date
    updatedAt: Date
    _count: DirectDailyPhraseStatCountAggregateOutputType | null
    _avg: DirectDailyPhraseStatAvgAggregateOutputType | null
    _sum: DirectDailyPhraseStatSumAggregateOutputType | null
    _min: DirectDailyPhraseStatMinAggregateOutputType | null
    _max: DirectDailyPhraseStatMaxAggregateOutputType | null
  }

  type GetDirectDailyPhraseStatGroupByPayload<T extends DirectDailyPhraseStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DirectDailyPhraseStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectDailyPhraseStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectDailyPhraseStatGroupByOutputType[P]>
            : GetScalarType<T[P], DirectDailyPhraseStatGroupByOutputType[P]>
        }
      >
    >


  export type DirectDailyPhraseStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    importBatchId?: boolean
    statDate?: boolean
    campaignId?: boolean
    campaignName?: boolean
    adGroupId?: boolean
    adGroupName?: boolean
    criteriaType?: boolean
    keywordText?: boolean
    targetRegionName?: boolean
    targetRegionId?: boolean
    deviceType?: boolean
    spend?: boolean
    clicks?: boolean
    directConversions?: boolean
    impressions?: boolean
    avgBidPerClick?: boolean
    avgImpressionPosition?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    importBatch?: boolean | DirectImportBatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["directDailyPhraseStat"]>

  export type DirectDailyPhraseStatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    importBatchId?: boolean
    statDate?: boolean
    campaignId?: boolean
    campaignName?: boolean
    adGroupId?: boolean
    adGroupName?: boolean
    criteriaType?: boolean
    keywordText?: boolean
    targetRegionName?: boolean
    targetRegionId?: boolean
    deviceType?: boolean
    spend?: boolean
    clicks?: boolean
    directConversions?: boolean
    impressions?: boolean
    avgBidPerClick?: boolean
    avgImpressionPosition?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    importBatch?: boolean | DirectImportBatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["directDailyPhraseStat"]>

  export type DirectDailyPhraseStatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    importBatchId?: boolean
    statDate?: boolean
    campaignId?: boolean
    campaignName?: boolean
    adGroupId?: boolean
    adGroupName?: boolean
    criteriaType?: boolean
    keywordText?: boolean
    targetRegionName?: boolean
    targetRegionId?: boolean
    deviceType?: boolean
    spend?: boolean
    clicks?: boolean
    directConversions?: boolean
    impressions?: boolean
    avgBidPerClick?: boolean
    avgImpressionPosition?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    importBatch?: boolean | DirectImportBatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["directDailyPhraseStat"]>

  export type DirectDailyPhraseStatSelectScalar = {
    id?: boolean
    importBatchId?: boolean
    statDate?: boolean
    campaignId?: boolean
    campaignName?: boolean
    adGroupId?: boolean
    adGroupName?: boolean
    criteriaType?: boolean
    keywordText?: boolean
    targetRegionName?: boolean
    targetRegionId?: boolean
    deviceType?: boolean
    spend?: boolean
    clicks?: boolean
    directConversions?: boolean
    impressions?: boolean
    avgBidPerClick?: boolean
    avgImpressionPosition?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DirectDailyPhraseStatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "importBatchId" | "statDate" | "campaignId" | "campaignName" | "adGroupId" | "adGroupName" | "criteriaType" | "keywordText" | "targetRegionName" | "targetRegionId" | "deviceType" | "spend" | "clicks" | "directConversions" | "impressions" | "avgBidPerClick" | "avgImpressionPosition" | "createdAt" | "updatedAt", ExtArgs["result"]["directDailyPhraseStat"]>
  export type DirectDailyPhraseStatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    importBatch?: boolean | DirectImportBatchDefaultArgs<ExtArgs>
  }
  export type DirectDailyPhraseStatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    importBatch?: boolean | DirectImportBatchDefaultArgs<ExtArgs>
  }
  export type DirectDailyPhraseStatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    importBatch?: boolean | DirectImportBatchDefaultArgs<ExtArgs>
  }

  export type $DirectDailyPhraseStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DirectDailyPhraseStat"
    objects: {
      importBatch: Prisma.$DirectImportBatchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      importBatchId: string
      statDate: Date
      campaignId: string
      campaignName: string
      adGroupId: string
      adGroupName: string
      criteriaType: string
      keywordText: string
      targetRegionName: string
      targetRegionId: string
      deviceType: string
      spend: Prisma.Decimal
      clicks: number
      directConversions: number
      impressions: number
      avgBidPerClick: Prisma.Decimal
      avgImpressionPosition: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["directDailyPhraseStat"]>
    composites: {}
  }

  type DirectDailyPhraseStatGetPayload<S extends boolean | null | undefined | DirectDailyPhraseStatDefaultArgs> = $Result.GetResult<Prisma.$DirectDailyPhraseStatPayload, S>

  type DirectDailyPhraseStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DirectDailyPhraseStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DirectDailyPhraseStatCountAggregateInputType | true
    }

  export interface DirectDailyPhraseStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DirectDailyPhraseStat'], meta: { name: 'DirectDailyPhraseStat' } }
    /**
     * Find zero or one DirectDailyPhraseStat that matches the filter.
     * @param {DirectDailyPhraseStatFindUniqueArgs} args - Arguments to find a DirectDailyPhraseStat
     * @example
     * // Get one DirectDailyPhraseStat
     * const directDailyPhraseStat = await prisma.directDailyPhraseStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DirectDailyPhraseStatFindUniqueArgs>(args: SelectSubset<T, DirectDailyPhraseStatFindUniqueArgs<ExtArgs>>): Prisma__DirectDailyPhraseStatClient<$Result.GetResult<Prisma.$DirectDailyPhraseStatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DirectDailyPhraseStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DirectDailyPhraseStatFindUniqueOrThrowArgs} args - Arguments to find a DirectDailyPhraseStat
     * @example
     * // Get one DirectDailyPhraseStat
     * const directDailyPhraseStat = await prisma.directDailyPhraseStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DirectDailyPhraseStatFindUniqueOrThrowArgs>(args: SelectSubset<T, DirectDailyPhraseStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DirectDailyPhraseStatClient<$Result.GetResult<Prisma.$DirectDailyPhraseStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DirectDailyPhraseStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectDailyPhraseStatFindFirstArgs} args - Arguments to find a DirectDailyPhraseStat
     * @example
     * // Get one DirectDailyPhraseStat
     * const directDailyPhraseStat = await prisma.directDailyPhraseStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DirectDailyPhraseStatFindFirstArgs>(args?: SelectSubset<T, DirectDailyPhraseStatFindFirstArgs<ExtArgs>>): Prisma__DirectDailyPhraseStatClient<$Result.GetResult<Prisma.$DirectDailyPhraseStatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DirectDailyPhraseStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectDailyPhraseStatFindFirstOrThrowArgs} args - Arguments to find a DirectDailyPhraseStat
     * @example
     * // Get one DirectDailyPhraseStat
     * const directDailyPhraseStat = await prisma.directDailyPhraseStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DirectDailyPhraseStatFindFirstOrThrowArgs>(args?: SelectSubset<T, DirectDailyPhraseStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__DirectDailyPhraseStatClient<$Result.GetResult<Prisma.$DirectDailyPhraseStatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DirectDailyPhraseStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectDailyPhraseStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DirectDailyPhraseStats
     * const directDailyPhraseStats = await prisma.directDailyPhraseStat.findMany()
     * 
     * // Get first 10 DirectDailyPhraseStats
     * const directDailyPhraseStats = await prisma.directDailyPhraseStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const directDailyPhraseStatWithIdOnly = await prisma.directDailyPhraseStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DirectDailyPhraseStatFindManyArgs>(args?: SelectSubset<T, DirectDailyPhraseStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectDailyPhraseStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DirectDailyPhraseStat.
     * @param {DirectDailyPhraseStatCreateArgs} args - Arguments to create a DirectDailyPhraseStat.
     * @example
     * // Create one DirectDailyPhraseStat
     * const DirectDailyPhraseStat = await prisma.directDailyPhraseStat.create({
     *   data: {
     *     // ... data to create a DirectDailyPhraseStat
     *   }
     * })
     * 
     */
    create<T extends DirectDailyPhraseStatCreateArgs>(args: SelectSubset<T, DirectDailyPhraseStatCreateArgs<ExtArgs>>): Prisma__DirectDailyPhraseStatClient<$Result.GetResult<Prisma.$DirectDailyPhraseStatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DirectDailyPhraseStats.
     * @param {DirectDailyPhraseStatCreateManyArgs} args - Arguments to create many DirectDailyPhraseStats.
     * @example
     * // Create many DirectDailyPhraseStats
     * const directDailyPhraseStat = await prisma.directDailyPhraseStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DirectDailyPhraseStatCreateManyArgs>(args?: SelectSubset<T, DirectDailyPhraseStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DirectDailyPhraseStats and returns the data saved in the database.
     * @param {DirectDailyPhraseStatCreateManyAndReturnArgs} args - Arguments to create many DirectDailyPhraseStats.
     * @example
     * // Create many DirectDailyPhraseStats
     * const directDailyPhraseStat = await prisma.directDailyPhraseStat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DirectDailyPhraseStats and only return the `id`
     * const directDailyPhraseStatWithIdOnly = await prisma.directDailyPhraseStat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DirectDailyPhraseStatCreateManyAndReturnArgs>(args?: SelectSubset<T, DirectDailyPhraseStatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectDailyPhraseStatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DirectDailyPhraseStat.
     * @param {DirectDailyPhraseStatDeleteArgs} args - Arguments to delete one DirectDailyPhraseStat.
     * @example
     * // Delete one DirectDailyPhraseStat
     * const DirectDailyPhraseStat = await prisma.directDailyPhraseStat.delete({
     *   where: {
     *     // ... filter to delete one DirectDailyPhraseStat
     *   }
     * })
     * 
     */
    delete<T extends DirectDailyPhraseStatDeleteArgs>(args: SelectSubset<T, DirectDailyPhraseStatDeleteArgs<ExtArgs>>): Prisma__DirectDailyPhraseStatClient<$Result.GetResult<Prisma.$DirectDailyPhraseStatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DirectDailyPhraseStat.
     * @param {DirectDailyPhraseStatUpdateArgs} args - Arguments to update one DirectDailyPhraseStat.
     * @example
     * // Update one DirectDailyPhraseStat
     * const directDailyPhraseStat = await prisma.directDailyPhraseStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DirectDailyPhraseStatUpdateArgs>(args: SelectSubset<T, DirectDailyPhraseStatUpdateArgs<ExtArgs>>): Prisma__DirectDailyPhraseStatClient<$Result.GetResult<Prisma.$DirectDailyPhraseStatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DirectDailyPhraseStats.
     * @param {DirectDailyPhraseStatDeleteManyArgs} args - Arguments to filter DirectDailyPhraseStats to delete.
     * @example
     * // Delete a few DirectDailyPhraseStats
     * const { count } = await prisma.directDailyPhraseStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DirectDailyPhraseStatDeleteManyArgs>(args?: SelectSubset<T, DirectDailyPhraseStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DirectDailyPhraseStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectDailyPhraseStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DirectDailyPhraseStats
     * const directDailyPhraseStat = await prisma.directDailyPhraseStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DirectDailyPhraseStatUpdateManyArgs>(args: SelectSubset<T, DirectDailyPhraseStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DirectDailyPhraseStats and returns the data updated in the database.
     * @param {DirectDailyPhraseStatUpdateManyAndReturnArgs} args - Arguments to update many DirectDailyPhraseStats.
     * @example
     * // Update many DirectDailyPhraseStats
     * const directDailyPhraseStat = await prisma.directDailyPhraseStat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DirectDailyPhraseStats and only return the `id`
     * const directDailyPhraseStatWithIdOnly = await prisma.directDailyPhraseStat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DirectDailyPhraseStatUpdateManyAndReturnArgs>(args: SelectSubset<T, DirectDailyPhraseStatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectDailyPhraseStatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DirectDailyPhraseStat.
     * @param {DirectDailyPhraseStatUpsertArgs} args - Arguments to update or create a DirectDailyPhraseStat.
     * @example
     * // Update or create a DirectDailyPhraseStat
     * const directDailyPhraseStat = await prisma.directDailyPhraseStat.upsert({
     *   create: {
     *     // ... data to create a DirectDailyPhraseStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DirectDailyPhraseStat we want to update
     *   }
     * })
     */
    upsert<T extends DirectDailyPhraseStatUpsertArgs>(args: SelectSubset<T, DirectDailyPhraseStatUpsertArgs<ExtArgs>>): Prisma__DirectDailyPhraseStatClient<$Result.GetResult<Prisma.$DirectDailyPhraseStatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DirectDailyPhraseStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectDailyPhraseStatCountArgs} args - Arguments to filter DirectDailyPhraseStats to count.
     * @example
     * // Count the number of DirectDailyPhraseStats
     * const count = await prisma.directDailyPhraseStat.count({
     *   where: {
     *     // ... the filter for the DirectDailyPhraseStats we want to count
     *   }
     * })
    **/
    count<T extends DirectDailyPhraseStatCountArgs>(
      args?: Subset<T, DirectDailyPhraseStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectDailyPhraseStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DirectDailyPhraseStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectDailyPhraseStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DirectDailyPhraseStatAggregateArgs>(args: Subset<T, DirectDailyPhraseStatAggregateArgs>): Prisma.PrismaPromise<GetDirectDailyPhraseStatAggregateType<T>>

    /**
     * Group by DirectDailyPhraseStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectDailyPhraseStatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DirectDailyPhraseStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirectDailyPhraseStatGroupByArgs['orderBy'] }
        : { orderBy?: DirectDailyPhraseStatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DirectDailyPhraseStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectDailyPhraseStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DirectDailyPhraseStat model
   */
  readonly fields: DirectDailyPhraseStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DirectDailyPhraseStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DirectDailyPhraseStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    importBatch<T extends DirectImportBatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectImportBatchDefaultArgs<ExtArgs>>): Prisma__DirectImportBatchClient<$Result.GetResult<Prisma.$DirectImportBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DirectDailyPhraseStat model
   */
  interface DirectDailyPhraseStatFieldRefs {
    readonly id: FieldRef<"DirectDailyPhraseStat", 'String'>
    readonly importBatchId: FieldRef<"DirectDailyPhraseStat", 'String'>
    readonly statDate: FieldRef<"DirectDailyPhraseStat", 'DateTime'>
    readonly campaignId: FieldRef<"DirectDailyPhraseStat", 'String'>
    readonly campaignName: FieldRef<"DirectDailyPhraseStat", 'String'>
    readonly adGroupId: FieldRef<"DirectDailyPhraseStat", 'String'>
    readonly adGroupName: FieldRef<"DirectDailyPhraseStat", 'String'>
    readonly criteriaType: FieldRef<"DirectDailyPhraseStat", 'String'>
    readonly keywordText: FieldRef<"DirectDailyPhraseStat", 'String'>
    readonly targetRegionName: FieldRef<"DirectDailyPhraseStat", 'String'>
    readonly targetRegionId: FieldRef<"DirectDailyPhraseStat", 'String'>
    readonly deviceType: FieldRef<"DirectDailyPhraseStat", 'String'>
    readonly spend: FieldRef<"DirectDailyPhraseStat", 'Decimal'>
    readonly clicks: FieldRef<"DirectDailyPhraseStat", 'Int'>
    readonly directConversions: FieldRef<"DirectDailyPhraseStat", 'Int'>
    readonly impressions: FieldRef<"DirectDailyPhraseStat", 'Int'>
    readonly avgBidPerClick: FieldRef<"DirectDailyPhraseStat", 'Decimal'>
    readonly avgImpressionPosition: FieldRef<"DirectDailyPhraseStat", 'Decimal'>
    readonly createdAt: FieldRef<"DirectDailyPhraseStat", 'DateTime'>
    readonly updatedAt: FieldRef<"DirectDailyPhraseStat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DirectDailyPhraseStat findUnique
   */
  export type DirectDailyPhraseStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectDailyPhraseStat
     */
    select?: DirectDailyPhraseStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectDailyPhraseStat
     */
    omit?: DirectDailyPhraseStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectDailyPhraseStatInclude<ExtArgs> | null
    /**
     * Filter, which DirectDailyPhraseStat to fetch.
     */
    where: DirectDailyPhraseStatWhereUniqueInput
  }

  /**
   * DirectDailyPhraseStat findUniqueOrThrow
   */
  export type DirectDailyPhraseStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectDailyPhraseStat
     */
    select?: DirectDailyPhraseStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectDailyPhraseStat
     */
    omit?: DirectDailyPhraseStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectDailyPhraseStatInclude<ExtArgs> | null
    /**
     * Filter, which DirectDailyPhraseStat to fetch.
     */
    where: DirectDailyPhraseStatWhereUniqueInput
  }

  /**
   * DirectDailyPhraseStat findFirst
   */
  export type DirectDailyPhraseStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectDailyPhraseStat
     */
    select?: DirectDailyPhraseStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectDailyPhraseStat
     */
    omit?: DirectDailyPhraseStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectDailyPhraseStatInclude<ExtArgs> | null
    /**
     * Filter, which DirectDailyPhraseStat to fetch.
     */
    where?: DirectDailyPhraseStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectDailyPhraseStats to fetch.
     */
    orderBy?: DirectDailyPhraseStatOrderByWithRelationInput | DirectDailyPhraseStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectDailyPhraseStats.
     */
    cursor?: DirectDailyPhraseStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectDailyPhraseStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectDailyPhraseStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectDailyPhraseStats.
     */
    distinct?: DirectDailyPhraseStatScalarFieldEnum | DirectDailyPhraseStatScalarFieldEnum[]
  }

  /**
   * DirectDailyPhraseStat findFirstOrThrow
   */
  export type DirectDailyPhraseStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectDailyPhraseStat
     */
    select?: DirectDailyPhraseStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectDailyPhraseStat
     */
    omit?: DirectDailyPhraseStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectDailyPhraseStatInclude<ExtArgs> | null
    /**
     * Filter, which DirectDailyPhraseStat to fetch.
     */
    where?: DirectDailyPhraseStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectDailyPhraseStats to fetch.
     */
    orderBy?: DirectDailyPhraseStatOrderByWithRelationInput | DirectDailyPhraseStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectDailyPhraseStats.
     */
    cursor?: DirectDailyPhraseStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectDailyPhraseStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectDailyPhraseStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectDailyPhraseStats.
     */
    distinct?: DirectDailyPhraseStatScalarFieldEnum | DirectDailyPhraseStatScalarFieldEnum[]
  }

  /**
   * DirectDailyPhraseStat findMany
   */
  export type DirectDailyPhraseStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectDailyPhraseStat
     */
    select?: DirectDailyPhraseStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectDailyPhraseStat
     */
    omit?: DirectDailyPhraseStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectDailyPhraseStatInclude<ExtArgs> | null
    /**
     * Filter, which DirectDailyPhraseStats to fetch.
     */
    where?: DirectDailyPhraseStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectDailyPhraseStats to fetch.
     */
    orderBy?: DirectDailyPhraseStatOrderByWithRelationInput | DirectDailyPhraseStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DirectDailyPhraseStats.
     */
    cursor?: DirectDailyPhraseStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectDailyPhraseStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectDailyPhraseStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectDailyPhraseStats.
     */
    distinct?: DirectDailyPhraseStatScalarFieldEnum | DirectDailyPhraseStatScalarFieldEnum[]
  }

  /**
   * DirectDailyPhraseStat create
   */
  export type DirectDailyPhraseStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectDailyPhraseStat
     */
    select?: DirectDailyPhraseStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectDailyPhraseStat
     */
    omit?: DirectDailyPhraseStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectDailyPhraseStatInclude<ExtArgs> | null
    /**
     * The data needed to create a DirectDailyPhraseStat.
     */
    data: XOR<DirectDailyPhraseStatCreateInput, DirectDailyPhraseStatUncheckedCreateInput>
  }

  /**
   * DirectDailyPhraseStat createMany
   */
  export type DirectDailyPhraseStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DirectDailyPhraseStats.
     */
    data: DirectDailyPhraseStatCreateManyInput | DirectDailyPhraseStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DirectDailyPhraseStat createManyAndReturn
   */
  export type DirectDailyPhraseStatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectDailyPhraseStat
     */
    select?: DirectDailyPhraseStatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DirectDailyPhraseStat
     */
    omit?: DirectDailyPhraseStatOmit<ExtArgs> | null
    /**
     * The data used to create many DirectDailyPhraseStats.
     */
    data: DirectDailyPhraseStatCreateManyInput | DirectDailyPhraseStatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectDailyPhraseStatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DirectDailyPhraseStat update
   */
  export type DirectDailyPhraseStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectDailyPhraseStat
     */
    select?: DirectDailyPhraseStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectDailyPhraseStat
     */
    omit?: DirectDailyPhraseStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectDailyPhraseStatInclude<ExtArgs> | null
    /**
     * The data needed to update a DirectDailyPhraseStat.
     */
    data: XOR<DirectDailyPhraseStatUpdateInput, DirectDailyPhraseStatUncheckedUpdateInput>
    /**
     * Choose, which DirectDailyPhraseStat to update.
     */
    where: DirectDailyPhraseStatWhereUniqueInput
  }

  /**
   * DirectDailyPhraseStat updateMany
   */
  export type DirectDailyPhraseStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DirectDailyPhraseStats.
     */
    data: XOR<DirectDailyPhraseStatUpdateManyMutationInput, DirectDailyPhraseStatUncheckedUpdateManyInput>
    /**
     * Filter which DirectDailyPhraseStats to update
     */
    where?: DirectDailyPhraseStatWhereInput
    /**
     * Limit how many DirectDailyPhraseStats to update.
     */
    limit?: number
  }

  /**
   * DirectDailyPhraseStat updateManyAndReturn
   */
  export type DirectDailyPhraseStatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectDailyPhraseStat
     */
    select?: DirectDailyPhraseStatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DirectDailyPhraseStat
     */
    omit?: DirectDailyPhraseStatOmit<ExtArgs> | null
    /**
     * The data used to update DirectDailyPhraseStats.
     */
    data: XOR<DirectDailyPhraseStatUpdateManyMutationInput, DirectDailyPhraseStatUncheckedUpdateManyInput>
    /**
     * Filter which DirectDailyPhraseStats to update
     */
    where?: DirectDailyPhraseStatWhereInput
    /**
     * Limit how many DirectDailyPhraseStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectDailyPhraseStatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DirectDailyPhraseStat upsert
   */
  export type DirectDailyPhraseStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectDailyPhraseStat
     */
    select?: DirectDailyPhraseStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectDailyPhraseStat
     */
    omit?: DirectDailyPhraseStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectDailyPhraseStatInclude<ExtArgs> | null
    /**
     * The filter to search for the DirectDailyPhraseStat to update in case it exists.
     */
    where: DirectDailyPhraseStatWhereUniqueInput
    /**
     * In case the DirectDailyPhraseStat found by the `where` argument doesn't exist, create a new DirectDailyPhraseStat with this data.
     */
    create: XOR<DirectDailyPhraseStatCreateInput, DirectDailyPhraseStatUncheckedCreateInput>
    /**
     * In case the DirectDailyPhraseStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DirectDailyPhraseStatUpdateInput, DirectDailyPhraseStatUncheckedUpdateInput>
  }

  /**
   * DirectDailyPhraseStat delete
   */
  export type DirectDailyPhraseStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectDailyPhraseStat
     */
    select?: DirectDailyPhraseStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectDailyPhraseStat
     */
    omit?: DirectDailyPhraseStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectDailyPhraseStatInclude<ExtArgs> | null
    /**
     * Filter which DirectDailyPhraseStat to delete.
     */
    where: DirectDailyPhraseStatWhereUniqueInput
  }

  /**
   * DirectDailyPhraseStat deleteMany
   */
  export type DirectDailyPhraseStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DirectDailyPhraseStats to delete
     */
    where?: DirectDailyPhraseStatWhereInput
    /**
     * Limit how many DirectDailyPhraseStats to delete.
     */
    limit?: number
  }

  /**
   * DirectDailyPhraseStat without action
   */
  export type DirectDailyPhraseStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectDailyPhraseStat
     */
    select?: DirectDailyPhraseStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectDailyPhraseStat
     */
    omit?: DirectDailyPhraseStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectDailyPhraseStatInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DirectImportBatchScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    importedAt: 'importedAt',
    rowsTotal: 'rowsTotal',
    rowsImported: 'rowsImported',
    rowsSkipped: 'rowsSkipped'
  };

  export type DirectImportBatchScalarFieldEnum = (typeof DirectImportBatchScalarFieldEnum)[keyof typeof DirectImportBatchScalarFieldEnum]


  export const DirectDailyPhraseStatScalarFieldEnum: {
    id: 'id',
    importBatchId: 'importBatchId',
    statDate: 'statDate',
    campaignId: 'campaignId',
    campaignName: 'campaignName',
    adGroupId: 'adGroupId',
    adGroupName: 'adGroupName',
    criteriaType: 'criteriaType',
    keywordText: 'keywordText',
    targetRegionName: 'targetRegionName',
    targetRegionId: 'targetRegionId',
    deviceType: 'deviceType',
    spend: 'spend',
    clicks: 'clicks',
    directConversions: 'directConversions',
    impressions: 'impressions',
    avgBidPerClick: 'avgBidPerClick',
    avgImpressionPosition: 'avgImpressionPosition',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DirectDailyPhraseStatScalarFieldEnum = (typeof DirectDailyPhraseStatScalarFieldEnum)[keyof typeof DirectDailyPhraseStatScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DirectImportBatchWhereInput = {
    AND?: DirectImportBatchWhereInput | DirectImportBatchWhereInput[]
    OR?: DirectImportBatchWhereInput[]
    NOT?: DirectImportBatchWhereInput | DirectImportBatchWhereInput[]
    id?: StringFilter<"DirectImportBatch"> | string
    fileName?: StringFilter<"DirectImportBatch"> | string
    importedAt?: DateTimeFilter<"DirectImportBatch"> | Date | string
    rowsTotal?: IntFilter<"DirectImportBatch"> | number
    rowsImported?: IntFilter<"DirectImportBatch"> | number
    rowsSkipped?: IntFilter<"DirectImportBatch"> | number
    stats?: DirectDailyPhraseStatListRelationFilter
  }

  export type DirectImportBatchOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    importedAt?: SortOrder
    rowsTotal?: SortOrder
    rowsImported?: SortOrder
    rowsSkipped?: SortOrder
    stats?: DirectDailyPhraseStatOrderByRelationAggregateInput
  }

  export type DirectImportBatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DirectImportBatchWhereInput | DirectImportBatchWhereInput[]
    OR?: DirectImportBatchWhereInput[]
    NOT?: DirectImportBatchWhereInput | DirectImportBatchWhereInput[]
    fileName?: StringFilter<"DirectImportBatch"> | string
    importedAt?: DateTimeFilter<"DirectImportBatch"> | Date | string
    rowsTotal?: IntFilter<"DirectImportBatch"> | number
    rowsImported?: IntFilter<"DirectImportBatch"> | number
    rowsSkipped?: IntFilter<"DirectImportBatch"> | number
    stats?: DirectDailyPhraseStatListRelationFilter
  }, "id">

  export type DirectImportBatchOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    importedAt?: SortOrder
    rowsTotal?: SortOrder
    rowsImported?: SortOrder
    rowsSkipped?: SortOrder
    _count?: DirectImportBatchCountOrderByAggregateInput
    _avg?: DirectImportBatchAvgOrderByAggregateInput
    _max?: DirectImportBatchMaxOrderByAggregateInput
    _min?: DirectImportBatchMinOrderByAggregateInput
    _sum?: DirectImportBatchSumOrderByAggregateInput
  }

  export type DirectImportBatchScalarWhereWithAggregatesInput = {
    AND?: DirectImportBatchScalarWhereWithAggregatesInput | DirectImportBatchScalarWhereWithAggregatesInput[]
    OR?: DirectImportBatchScalarWhereWithAggregatesInput[]
    NOT?: DirectImportBatchScalarWhereWithAggregatesInput | DirectImportBatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DirectImportBatch"> | string
    fileName?: StringWithAggregatesFilter<"DirectImportBatch"> | string
    importedAt?: DateTimeWithAggregatesFilter<"DirectImportBatch"> | Date | string
    rowsTotal?: IntWithAggregatesFilter<"DirectImportBatch"> | number
    rowsImported?: IntWithAggregatesFilter<"DirectImportBatch"> | number
    rowsSkipped?: IntWithAggregatesFilter<"DirectImportBatch"> | number
  }

  export type DirectDailyPhraseStatWhereInput = {
    AND?: DirectDailyPhraseStatWhereInput | DirectDailyPhraseStatWhereInput[]
    OR?: DirectDailyPhraseStatWhereInput[]
    NOT?: DirectDailyPhraseStatWhereInput | DirectDailyPhraseStatWhereInput[]
    id?: StringFilter<"DirectDailyPhraseStat"> | string
    importBatchId?: StringFilter<"DirectDailyPhraseStat"> | string
    statDate?: DateTimeFilter<"DirectDailyPhraseStat"> | Date | string
    campaignId?: StringFilter<"DirectDailyPhraseStat"> | string
    campaignName?: StringFilter<"DirectDailyPhraseStat"> | string
    adGroupId?: StringFilter<"DirectDailyPhraseStat"> | string
    adGroupName?: StringFilter<"DirectDailyPhraseStat"> | string
    criteriaType?: StringFilter<"DirectDailyPhraseStat"> | string
    keywordText?: StringFilter<"DirectDailyPhraseStat"> | string
    targetRegionName?: StringFilter<"DirectDailyPhraseStat"> | string
    targetRegionId?: StringFilter<"DirectDailyPhraseStat"> | string
    deviceType?: StringFilter<"DirectDailyPhraseStat"> | string
    spend?: DecimalFilter<"DirectDailyPhraseStat"> | Decimal | DecimalJsLike | number | string
    clicks?: IntFilter<"DirectDailyPhraseStat"> | number
    directConversions?: IntFilter<"DirectDailyPhraseStat"> | number
    impressions?: IntFilter<"DirectDailyPhraseStat"> | number
    avgBidPerClick?: DecimalFilter<"DirectDailyPhraseStat"> | Decimal | DecimalJsLike | number | string
    avgImpressionPosition?: DecimalFilter<"DirectDailyPhraseStat"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DirectDailyPhraseStat"> | Date | string
    updatedAt?: DateTimeFilter<"DirectDailyPhraseStat"> | Date | string
    importBatch?: XOR<DirectImportBatchScalarRelationFilter, DirectImportBatchWhereInput>
  }

  export type DirectDailyPhraseStatOrderByWithRelationInput = {
    id?: SortOrder
    importBatchId?: SortOrder
    statDate?: SortOrder
    campaignId?: SortOrder
    campaignName?: SortOrder
    adGroupId?: SortOrder
    adGroupName?: SortOrder
    criteriaType?: SortOrder
    keywordText?: SortOrder
    targetRegionName?: SortOrder
    targetRegionId?: SortOrder
    deviceType?: SortOrder
    spend?: SortOrder
    clicks?: SortOrder
    directConversions?: SortOrder
    impressions?: SortOrder
    avgBidPerClick?: SortOrder
    avgImpressionPosition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    importBatch?: DirectImportBatchOrderByWithRelationInput
  }

  export type DirectDailyPhraseStatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    statDate_campaignId_adGroupId_criteriaType_keywordText_targetRegionId_deviceType?: DirectDailyPhraseStatStatDateCampaignIdAdGroupIdCriteriaTypeKeywordTextTargetRegionIdDeviceTypeCompoundUniqueInput
    AND?: DirectDailyPhraseStatWhereInput | DirectDailyPhraseStatWhereInput[]
    OR?: DirectDailyPhraseStatWhereInput[]
    NOT?: DirectDailyPhraseStatWhereInput | DirectDailyPhraseStatWhereInput[]
    importBatchId?: StringFilter<"DirectDailyPhraseStat"> | string
    statDate?: DateTimeFilter<"DirectDailyPhraseStat"> | Date | string
    campaignId?: StringFilter<"DirectDailyPhraseStat"> | string
    campaignName?: StringFilter<"DirectDailyPhraseStat"> | string
    adGroupId?: StringFilter<"DirectDailyPhraseStat"> | string
    adGroupName?: StringFilter<"DirectDailyPhraseStat"> | string
    criteriaType?: StringFilter<"DirectDailyPhraseStat"> | string
    keywordText?: StringFilter<"DirectDailyPhraseStat"> | string
    targetRegionName?: StringFilter<"DirectDailyPhraseStat"> | string
    targetRegionId?: StringFilter<"DirectDailyPhraseStat"> | string
    deviceType?: StringFilter<"DirectDailyPhraseStat"> | string
    spend?: DecimalFilter<"DirectDailyPhraseStat"> | Decimal | DecimalJsLike | number | string
    clicks?: IntFilter<"DirectDailyPhraseStat"> | number
    directConversions?: IntFilter<"DirectDailyPhraseStat"> | number
    impressions?: IntFilter<"DirectDailyPhraseStat"> | number
    avgBidPerClick?: DecimalFilter<"DirectDailyPhraseStat"> | Decimal | DecimalJsLike | number | string
    avgImpressionPosition?: DecimalFilter<"DirectDailyPhraseStat"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DirectDailyPhraseStat"> | Date | string
    updatedAt?: DateTimeFilter<"DirectDailyPhraseStat"> | Date | string
    importBatch?: XOR<DirectImportBatchScalarRelationFilter, DirectImportBatchWhereInput>
  }, "id" | "statDate_campaignId_adGroupId_criteriaType_keywordText_targetRegionId_deviceType">

  export type DirectDailyPhraseStatOrderByWithAggregationInput = {
    id?: SortOrder
    importBatchId?: SortOrder
    statDate?: SortOrder
    campaignId?: SortOrder
    campaignName?: SortOrder
    adGroupId?: SortOrder
    adGroupName?: SortOrder
    criteriaType?: SortOrder
    keywordText?: SortOrder
    targetRegionName?: SortOrder
    targetRegionId?: SortOrder
    deviceType?: SortOrder
    spend?: SortOrder
    clicks?: SortOrder
    directConversions?: SortOrder
    impressions?: SortOrder
    avgBidPerClick?: SortOrder
    avgImpressionPosition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DirectDailyPhraseStatCountOrderByAggregateInput
    _avg?: DirectDailyPhraseStatAvgOrderByAggregateInput
    _max?: DirectDailyPhraseStatMaxOrderByAggregateInput
    _min?: DirectDailyPhraseStatMinOrderByAggregateInput
    _sum?: DirectDailyPhraseStatSumOrderByAggregateInput
  }

  export type DirectDailyPhraseStatScalarWhereWithAggregatesInput = {
    AND?: DirectDailyPhraseStatScalarWhereWithAggregatesInput | DirectDailyPhraseStatScalarWhereWithAggregatesInput[]
    OR?: DirectDailyPhraseStatScalarWhereWithAggregatesInput[]
    NOT?: DirectDailyPhraseStatScalarWhereWithAggregatesInput | DirectDailyPhraseStatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DirectDailyPhraseStat"> | string
    importBatchId?: StringWithAggregatesFilter<"DirectDailyPhraseStat"> | string
    statDate?: DateTimeWithAggregatesFilter<"DirectDailyPhraseStat"> | Date | string
    campaignId?: StringWithAggregatesFilter<"DirectDailyPhraseStat"> | string
    campaignName?: StringWithAggregatesFilter<"DirectDailyPhraseStat"> | string
    adGroupId?: StringWithAggregatesFilter<"DirectDailyPhraseStat"> | string
    adGroupName?: StringWithAggregatesFilter<"DirectDailyPhraseStat"> | string
    criteriaType?: StringWithAggregatesFilter<"DirectDailyPhraseStat"> | string
    keywordText?: StringWithAggregatesFilter<"DirectDailyPhraseStat"> | string
    targetRegionName?: StringWithAggregatesFilter<"DirectDailyPhraseStat"> | string
    targetRegionId?: StringWithAggregatesFilter<"DirectDailyPhraseStat"> | string
    deviceType?: StringWithAggregatesFilter<"DirectDailyPhraseStat"> | string
    spend?: DecimalWithAggregatesFilter<"DirectDailyPhraseStat"> | Decimal | DecimalJsLike | number | string
    clicks?: IntWithAggregatesFilter<"DirectDailyPhraseStat"> | number
    directConversions?: IntWithAggregatesFilter<"DirectDailyPhraseStat"> | number
    impressions?: IntWithAggregatesFilter<"DirectDailyPhraseStat"> | number
    avgBidPerClick?: DecimalWithAggregatesFilter<"DirectDailyPhraseStat"> | Decimal | DecimalJsLike | number | string
    avgImpressionPosition?: DecimalWithAggregatesFilter<"DirectDailyPhraseStat"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"DirectDailyPhraseStat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DirectDailyPhraseStat"> | Date | string
  }

  export type DirectImportBatchCreateInput = {
    id?: string
    fileName: string
    importedAt?: Date | string
    rowsTotal: number
    rowsImported: number
    rowsSkipped: number
    stats?: DirectDailyPhraseStatCreateNestedManyWithoutImportBatchInput
  }

  export type DirectImportBatchUncheckedCreateInput = {
    id?: string
    fileName: string
    importedAt?: Date | string
    rowsTotal: number
    rowsImported: number
    rowsSkipped: number
    stats?: DirectDailyPhraseStatUncheckedCreateNestedManyWithoutImportBatchInput
  }

  export type DirectImportBatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rowsTotal?: IntFieldUpdateOperationsInput | number
    rowsImported?: IntFieldUpdateOperationsInput | number
    rowsSkipped?: IntFieldUpdateOperationsInput | number
    stats?: DirectDailyPhraseStatUpdateManyWithoutImportBatchNestedInput
  }

  export type DirectImportBatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rowsTotal?: IntFieldUpdateOperationsInput | number
    rowsImported?: IntFieldUpdateOperationsInput | number
    rowsSkipped?: IntFieldUpdateOperationsInput | number
    stats?: DirectDailyPhraseStatUncheckedUpdateManyWithoutImportBatchNestedInput
  }

  export type DirectImportBatchCreateManyInput = {
    id?: string
    fileName: string
    importedAt?: Date | string
    rowsTotal: number
    rowsImported: number
    rowsSkipped: number
  }

  export type DirectImportBatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rowsTotal?: IntFieldUpdateOperationsInput | number
    rowsImported?: IntFieldUpdateOperationsInput | number
    rowsSkipped?: IntFieldUpdateOperationsInput | number
  }

  export type DirectImportBatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rowsTotal?: IntFieldUpdateOperationsInput | number
    rowsImported?: IntFieldUpdateOperationsInput | number
    rowsSkipped?: IntFieldUpdateOperationsInput | number
  }

  export type DirectDailyPhraseStatCreateInput = {
    id?: string
    statDate: Date | string
    campaignId: string
    campaignName: string
    adGroupId: string
    adGroupName: string
    criteriaType: string
    keywordText: string
    targetRegionName: string
    targetRegionId: string
    deviceType: string
    spend: Decimal | DecimalJsLike | number | string
    clicks: number
    directConversions: number
    impressions: number
    avgBidPerClick: Decimal | DecimalJsLike | number | string
    avgImpressionPosition: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    importBatch: DirectImportBatchCreateNestedOneWithoutStatsInput
  }

  export type DirectDailyPhraseStatUncheckedCreateInput = {
    id?: string
    importBatchId: string
    statDate: Date | string
    campaignId: string
    campaignName: string
    adGroupId: string
    adGroupName: string
    criteriaType: string
    keywordText: string
    targetRegionName: string
    targetRegionId: string
    deviceType: string
    spend: Decimal | DecimalJsLike | number | string
    clicks: number
    directConversions: number
    impressions: number
    avgBidPerClick: Decimal | DecimalJsLike | number | string
    avgImpressionPosition: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectDailyPhraseStatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    statDate?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
    campaignName?: StringFieldUpdateOperationsInput | string
    adGroupId?: StringFieldUpdateOperationsInput | string
    adGroupName?: StringFieldUpdateOperationsInput | string
    criteriaType?: StringFieldUpdateOperationsInput | string
    keywordText?: StringFieldUpdateOperationsInput | string
    targetRegionName?: StringFieldUpdateOperationsInput | string
    targetRegionId?: StringFieldUpdateOperationsInput | string
    deviceType?: StringFieldUpdateOperationsInput | string
    spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clicks?: IntFieldUpdateOperationsInput | number
    directConversions?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    avgBidPerClick?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgImpressionPosition?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importBatch?: DirectImportBatchUpdateOneRequiredWithoutStatsNestedInput
  }

  export type DirectDailyPhraseStatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    importBatchId?: StringFieldUpdateOperationsInput | string
    statDate?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
    campaignName?: StringFieldUpdateOperationsInput | string
    adGroupId?: StringFieldUpdateOperationsInput | string
    adGroupName?: StringFieldUpdateOperationsInput | string
    criteriaType?: StringFieldUpdateOperationsInput | string
    keywordText?: StringFieldUpdateOperationsInput | string
    targetRegionName?: StringFieldUpdateOperationsInput | string
    targetRegionId?: StringFieldUpdateOperationsInput | string
    deviceType?: StringFieldUpdateOperationsInput | string
    spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clicks?: IntFieldUpdateOperationsInput | number
    directConversions?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    avgBidPerClick?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgImpressionPosition?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectDailyPhraseStatCreateManyInput = {
    id?: string
    importBatchId: string
    statDate: Date | string
    campaignId: string
    campaignName: string
    adGroupId: string
    adGroupName: string
    criteriaType: string
    keywordText: string
    targetRegionName: string
    targetRegionId: string
    deviceType: string
    spend: Decimal | DecimalJsLike | number | string
    clicks: number
    directConversions: number
    impressions: number
    avgBidPerClick: Decimal | DecimalJsLike | number | string
    avgImpressionPosition: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectDailyPhraseStatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    statDate?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
    campaignName?: StringFieldUpdateOperationsInput | string
    adGroupId?: StringFieldUpdateOperationsInput | string
    adGroupName?: StringFieldUpdateOperationsInput | string
    criteriaType?: StringFieldUpdateOperationsInput | string
    keywordText?: StringFieldUpdateOperationsInput | string
    targetRegionName?: StringFieldUpdateOperationsInput | string
    targetRegionId?: StringFieldUpdateOperationsInput | string
    deviceType?: StringFieldUpdateOperationsInput | string
    spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clicks?: IntFieldUpdateOperationsInput | number
    directConversions?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    avgBidPerClick?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgImpressionPosition?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectDailyPhraseStatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    importBatchId?: StringFieldUpdateOperationsInput | string
    statDate?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
    campaignName?: StringFieldUpdateOperationsInput | string
    adGroupId?: StringFieldUpdateOperationsInput | string
    adGroupName?: StringFieldUpdateOperationsInput | string
    criteriaType?: StringFieldUpdateOperationsInput | string
    keywordText?: StringFieldUpdateOperationsInput | string
    targetRegionName?: StringFieldUpdateOperationsInput | string
    targetRegionId?: StringFieldUpdateOperationsInput | string
    deviceType?: StringFieldUpdateOperationsInput | string
    spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clicks?: IntFieldUpdateOperationsInput | number
    directConversions?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    avgBidPerClick?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgImpressionPosition?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DirectDailyPhraseStatListRelationFilter = {
    every?: DirectDailyPhraseStatWhereInput
    some?: DirectDailyPhraseStatWhereInput
    none?: DirectDailyPhraseStatWhereInput
  }

  export type DirectDailyPhraseStatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DirectImportBatchCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    importedAt?: SortOrder
    rowsTotal?: SortOrder
    rowsImported?: SortOrder
    rowsSkipped?: SortOrder
  }

  export type DirectImportBatchAvgOrderByAggregateInput = {
    rowsTotal?: SortOrder
    rowsImported?: SortOrder
    rowsSkipped?: SortOrder
  }

  export type DirectImportBatchMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    importedAt?: SortOrder
    rowsTotal?: SortOrder
    rowsImported?: SortOrder
    rowsSkipped?: SortOrder
  }

  export type DirectImportBatchMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    importedAt?: SortOrder
    rowsTotal?: SortOrder
    rowsImported?: SortOrder
    rowsSkipped?: SortOrder
  }

  export type DirectImportBatchSumOrderByAggregateInput = {
    rowsTotal?: SortOrder
    rowsImported?: SortOrder
    rowsSkipped?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DirectImportBatchScalarRelationFilter = {
    is?: DirectImportBatchWhereInput
    isNot?: DirectImportBatchWhereInput
  }

  export type DirectDailyPhraseStatStatDateCampaignIdAdGroupIdCriteriaTypeKeywordTextTargetRegionIdDeviceTypeCompoundUniqueInput = {
    statDate: Date | string
    campaignId: string
    adGroupId: string
    criteriaType: string
    keywordText: string
    targetRegionId: string
    deviceType: string
  }

  export type DirectDailyPhraseStatCountOrderByAggregateInput = {
    id?: SortOrder
    importBatchId?: SortOrder
    statDate?: SortOrder
    campaignId?: SortOrder
    campaignName?: SortOrder
    adGroupId?: SortOrder
    adGroupName?: SortOrder
    criteriaType?: SortOrder
    keywordText?: SortOrder
    targetRegionName?: SortOrder
    targetRegionId?: SortOrder
    deviceType?: SortOrder
    spend?: SortOrder
    clicks?: SortOrder
    directConversions?: SortOrder
    impressions?: SortOrder
    avgBidPerClick?: SortOrder
    avgImpressionPosition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectDailyPhraseStatAvgOrderByAggregateInput = {
    spend?: SortOrder
    clicks?: SortOrder
    directConversions?: SortOrder
    impressions?: SortOrder
    avgBidPerClick?: SortOrder
    avgImpressionPosition?: SortOrder
  }

  export type DirectDailyPhraseStatMaxOrderByAggregateInput = {
    id?: SortOrder
    importBatchId?: SortOrder
    statDate?: SortOrder
    campaignId?: SortOrder
    campaignName?: SortOrder
    adGroupId?: SortOrder
    adGroupName?: SortOrder
    criteriaType?: SortOrder
    keywordText?: SortOrder
    targetRegionName?: SortOrder
    targetRegionId?: SortOrder
    deviceType?: SortOrder
    spend?: SortOrder
    clicks?: SortOrder
    directConversions?: SortOrder
    impressions?: SortOrder
    avgBidPerClick?: SortOrder
    avgImpressionPosition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectDailyPhraseStatMinOrderByAggregateInput = {
    id?: SortOrder
    importBatchId?: SortOrder
    statDate?: SortOrder
    campaignId?: SortOrder
    campaignName?: SortOrder
    adGroupId?: SortOrder
    adGroupName?: SortOrder
    criteriaType?: SortOrder
    keywordText?: SortOrder
    targetRegionName?: SortOrder
    targetRegionId?: SortOrder
    deviceType?: SortOrder
    spend?: SortOrder
    clicks?: SortOrder
    directConversions?: SortOrder
    impressions?: SortOrder
    avgBidPerClick?: SortOrder
    avgImpressionPosition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectDailyPhraseStatSumOrderByAggregateInput = {
    spend?: SortOrder
    clicks?: SortOrder
    directConversions?: SortOrder
    impressions?: SortOrder
    avgBidPerClick?: SortOrder
    avgImpressionPosition?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DirectDailyPhraseStatCreateNestedManyWithoutImportBatchInput = {
    create?: XOR<DirectDailyPhraseStatCreateWithoutImportBatchInput, DirectDailyPhraseStatUncheckedCreateWithoutImportBatchInput> | DirectDailyPhraseStatCreateWithoutImportBatchInput[] | DirectDailyPhraseStatUncheckedCreateWithoutImportBatchInput[]
    connectOrCreate?: DirectDailyPhraseStatCreateOrConnectWithoutImportBatchInput | DirectDailyPhraseStatCreateOrConnectWithoutImportBatchInput[]
    createMany?: DirectDailyPhraseStatCreateManyImportBatchInputEnvelope
    connect?: DirectDailyPhraseStatWhereUniqueInput | DirectDailyPhraseStatWhereUniqueInput[]
  }

  export type DirectDailyPhraseStatUncheckedCreateNestedManyWithoutImportBatchInput = {
    create?: XOR<DirectDailyPhraseStatCreateWithoutImportBatchInput, DirectDailyPhraseStatUncheckedCreateWithoutImportBatchInput> | DirectDailyPhraseStatCreateWithoutImportBatchInput[] | DirectDailyPhraseStatUncheckedCreateWithoutImportBatchInput[]
    connectOrCreate?: DirectDailyPhraseStatCreateOrConnectWithoutImportBatchInput | DirectDailyPhraseStatCreateOrConnectWithoutImportBatchInput[]
    createMany?: DirectDailyPhraseStatCreateManyImportBatchInputEnvelope
    connect?: DirectDailyPhraseStatWhereUniqueInput | DirectDailyPhraseStatWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DirectDailyPhraseStatUpdateManyWithoutImportBatchNestedInput = {
    create?: XOR<DirectDailyPhraseStatCreateWithoutImportBatchInput, DirectDailyPhraseStatUncheckedCreateWithoutImportBatchInput> | DirectDailyPhraseStatCreateWithoutImportBatchInput[] | DirectDailyPhraseStatUncheckedCreateWithoutImportBatchInput[]
    connectOrCreate?: DirectDailyPhraseStatCreateOrConnectWithoutImportBatchInput | DirectDailyPhraseStatCreateOrConnectWithoutImportBatchInput[]
    upsert?: DirectDailyPhraseStatUpsertWithWhereUniqueWithoutImportBatchInput | DirectDailyPhraseStatUpsertWithWhereUniqueWithoutImportBatchInput[]
    createMany?: DirectDailyPhraseStatCreateManyImportBatchInputEnvelope
    set?: DirectDailyPhraseStatWhereUniqueInput | DirectDailyPhraseStatWhereUniqueInput[]
    disconnect?: DirectDailyPhraseStatWhereUniqueInput | DirectDailyPhraseStatWhereUniqueInput[]
    delete?: DirectDailyPhraseStatWhereUniqueInput | DirectDailyPhraseStatWhereUniqueInput[]
    connect?: DirectDailyPhraseStatWhereUniqueInput | DirectDailyPhraseStatWhereUniqueInput[]
    update?: DirectDailyPhraseStatUpdateWithWhereUniqueWithoutImportBatchInput | DirectDailyPhraseStatUpdateWithWhereUniqueWithoutImportBatchInput[]
    updateMany?: DirectDailyPhraseStatUpdateManyWithWhereWithoutImportBatchInput | DirectDailyPhraseStatUpdateManyWithWhereWithoutImportBatchInput[]
    deleteMany?: DirectDailyPhraseStatScalarWhereInput | DirectDailyPhraseStatScalarWhereInput[]
  }

  export type DirectDailyPhraseStatUncheckedUpdateManyWithoutImportBatchNestedInput = {
    create?: XOR<DirectDailyPhraseStatCreateWithoutImportBatchInput, DirectDailyPhraseStatUncheckedCreateWithoutImportBatchInput> | DirectDailyPhraseStatCreateWithoutImportBatchInput[] | DirectDailyPhraseStatUncheckedCreateWithoutImportBatchInput[]
    connectOrCreate?: DirectDailyPhraseStatCreateOrConnectWithoutImportBatchInput | DirectDailyPhraseStatCreateOrConnectWithoutImportBatchInput[]
    upsert?: DirectDailyPhraseStatUpsertWithWhereUniqueWithoutImportBatchInput | DirectDailyPhraseStatUpsertWithWhereUniqueWithoutImportBatchInput[]
    createMany?: DirectDailyPhraseStatCreateManyImportBatchInputEnvelope
    set?: DirectDailyPhraseStatWhereUniqueInput | DirectDailyPhraseStatWhereUniqueInput[]
    disconnect?: DirectDailyPhraseStatWhereUniqueInput | DirectDailyPhraseStatWhereUniqueInput[]
    delete?: DirectDailyPhraseStatWhereUniqueInput | DirectDailyPhraseStatWhereUniqueInput[]
    connect?: DirectDailyPhraseStatWhereUniqueInput | DirectDailyPhraseStatWhereUniqueInput[]
    update?: DirectDailyPhraseStatUpdateWithWhereUniqueWithoutImportBatchInput | DirectDailyPhraseStatUpdateWithWhereUniqueWithoutImportBatchInput[]
    updateMany?: DirectDailyPhraseStatUpdateManyWithWhereWithoutImportBatchInput | DirectDailyPhraseStatUpdateManyWithWhereWithoutImportBatchInput[]
    deleteMany?: DirectDailyPhraseStatScalarWhereInput | DirectDailyPhraseStatScalarWhereInput[]
  }

  export type DirectImportBatchCreateNestedOneWithoutStatsInput = {
    create?: XOR<DirectImportBatchCreateWithoutStatsInput, DirectImportBatchUncheckedCreateWithoutStatsInput>
    connectOrCreate?: DirectImportBatchCreateOrConnectWithoutStatsInput
    connect?: DirectImportBatchWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DirectImportBatchUpdateOneRequiredWithoutStatsNestedInput = {
    create?: XOR<DirectImportBatchCreateWithoutStatsInput, DirectImportBatchUncheckedCreateWithoutStatsInput>
    connectOrCreate?: DirectImportBatchCreateOrConnectWithoutStatsInput
    upsert?: DirectImportBatchUpsertWithoutStatsInput
    connect?: DirectImportBatchWhereUniqueInput
    update?: XOR<XOR<DirectImportBatchUpdateToOneWithWhereWithoutStatsInput, DirectImportBatchUpdateWithoutStatsInput>, DirectImportBatchUncheckedUpdateWithoutStatsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DirectDailyPhraseStatCreateWithoutImportBatchInput = {
    id?: string
    statDate: Date | string
    campaignId: string
    campaignName: string
    adGroupId: string
    adGroupName: string
    criteriaType: string
    keywordText: string
    targetRegionName: string
    targetRegionId: string
    deviceType: string
    spend: Decimal | DecimalJsLike | number | string
    clicks: number
    directConversions: number
    impressions: number
    avgBidPerClick: Decimal | DecimalJsLike | number | string
    avgImpressionPosition: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectDailyPhraseStatUncheckedCreateWithoutImportBatchInput = {
    id?: string
    statDate: Date | string
    campaignId: string
    campaignName: string
    adGroupId: string
    adGroupName: string
    criteriaType: string
    keywordText: string
    targetRegionName: string
    targetRegionId: string
    deviceType: string
    spend: Decimal | DecimalJsLike | number | string
    clicks: number
    directConversions: number
    impressions: number
    avgBidPerClick: Decimal | DecimalJsLike | number | string
    avgImpressionPosition: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectDailyPhraseStatCreateOrConnectWithoutImportBatchInput = {
    where: DirectDailyPhraseStatWhereUniqueInput
    create: XOR<DirectDailyPhraseStatCreateWithoutImportBatchInput, DirectDailyPhraseStatUncheckedCreateWithoutImportBatchInput>
  }

  export type DirectDailyPhraseStatCreateManyImportBatchInputEnvelope = {
    data: DirectDailyPhraseStatCreateManyImportBatchInput | DirectDailyPhraseStatCreateManyImportBatchInput[]
    skipDuplicates?: boolean
  }

  export type DirectDailyPhraseStatUpsertWithWhereUniqueWithoutImportBatchInput = {
    where: DirectDailyPhraseStatWhereUniqueInput
    update: XOR<DirectDailyPhraseStatUpdateWithoutImportBatchInput, DirectDailyPhraseStatUncheckedUpdateWithoutImportBatchInput>
    create: XOR<DirectDailyPhraseStatCreateWithoutImportBatchInput, DirectDailyPhraseStatUncheckedCreateWithoutImportBatchInput>
  }

  export type DirectDailyPhraseStatUpdateWithWhereUniqueWithoutImportBatchInput = {
    where: DirectDailyPhraseStatWhereUniqueInput
    data: XOR<DirectDailyPhraseStatUpdateWithoutImportBatchInput, DirectDailyPhraseStatUncheckedUpdateWithoutImportBatchInput>
  }

  export type DirectDailyPhraseStatUpdateManyWithWhereWithoutImportBatchInput = {
    where: DirectDailyPhraseStatScalarWhereInput
    data: XOR<DirectDailyPhraseStatUpdateManyMutationInput, DirectDailyPhraseStatUncheckedUpdateManyWithoutImportBatchInput>
  }

  export type DirectDailyPhraseStatScalarWhereInput = {
    AND?: DirectDailyPhraseStatScalarWhereInput | DirectDailyPhraseStatScalarWhereInput[]
    OR?: DirectDailyPhraseStatScalarWhereInput[]
    NOT?: DirectDailyPhraseStatScalarWhereInput | DirectDailyPhraseStatScalarWhereInput[]
    id?: StringFilter<"DirectDailyPhraseStat"> | string
    importBatchId?: StringFilter<"DirectDailyPhraseStat"> | string
    statDate?: DateTimeFilter<"DirectDailyPhraseStat"> | Date | string
    campaignId?: StringFilter<"DirectDailyPhraseStat"> | string
    campaignName?: StringFilter<"DirectDailyPhraseStat"> | string
    adGroupId?: StringFilter<"DirectDailyPhraseStat"> | string
    adGroupName?: StringFilter<"DirectDailyPhraseStat"> | string
    criteriaType?: StringFilter<"DirectDailyPhraseStat"> | string
    keywordText?: StringFilter<"DirectDailyPhraseStat"> | string
    targetRegionName?: StringFilter<"DirectDailyPhraseStat"> | string
    targetRegionId?: StringFilter<"DirectDailyPhraseStat"> | string
    deviceType?: StringFilter<"DirectDailyPhraseStat"> | string
    spend?: DecimalFilter<"DirectDailyPhraseStat"> | Decimal | DecimalJsLike | number | string
    clicks?: IntFilter<"DirectDailyPhraseStat"> | number
    directConversions?: IntFilter<"DirectDailyPhraseStat"> | number
    impressions?: IntFilter<"DirectDailyPhraseStat"> | number
    avgBidPerClick?: DecimalFilter<"DirectDailyPhraseStat"> | Decimal | DecimalJsLike | number | string
    avgImpressionPosition?: DecimalFilter<"DirectDailyPhraseStat"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DirectDailyPhraseStat"> | Date | string
    updatedAt?: DateTimeFilter<"DirectDailyPhraseStat"> | Date | string
  }

  export type DirectImportBatchCreateWithoutStatsInput = {
    id?: string
    fileName: string
    importedAt?: Date | string
    rowsTotal: number
    rowsImported: number
    rowsSkipped: number
  }

  export type DirectImportBatchUncheckedCreateWithoutStatsInput = {
    id?: string
    fileName: string
    importedAt?: Date | string
    rowsTotal: number
    rowsImported: number
    rowsSkipped: number
  }

  export type DirectImportBatchCreateOrConnectWithoutStatsInput = {
    where: DirectImportBatchWhereUniqueInput
    create: XOR<DirectImportBatchCreateWithoutStatsInput, DirectImportBatchUncheckedCreateWithoutStatsInput>
  }

  export type DirectImportBatchUpsertWithoutStatsInput = {
    update: XOR<DirectImportBatchUpdateWithoutStatsInput, DirectImportBatchUncheckedUpdateWithoutStatsInput>
    create: XOR<DirectImportBatchCreateWithoutStatsInput, DirectImportBatchUncheckedCreateWithoutStatsInput>
    where?: DirectImportBatchWhereInput
  }

  export type DirectImportBatchUpdateToOneWithWhereWithoutStatsInput = {
    where?: DirectImportBatchWhereInput
    data: XOR<DirectImportBatchUpdateWithoutStatsInput, DirectImportBatchUncheckedUpdateWithoutStatsInput>
  }

  export type DirectImportBatchUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rowsTotal?: IntFieldUpdateOperationsInput | number
    rowsImported?: IntFieldUpdateOperationsInput | number
    rowsSkipped?: IntFieldUpdateOperationsInput | number
  }

  export type DirectImportBatchUncheckedUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rowsTotal?: IntFieldUpdateOperationsInput | number
    rowsImported?: IntFieldUpdateOperationsInput | number
    rowsSkipped?: IntFieldUpdateOperationsInput | number
  }

  export type DirectDailyPhraseStatCreateManyImportBatchInput = {
    id?: string
    statDate: Date | string
    campaignId: string
    campaignName: string
    adGroupId: string
    adGroupName: string
    criteriaType: string
    keywordText: string
    targetRegionName: string
    targetRegionId: string
    deviceType: string
    spend: Decimal | DecimalJsLike | number | string
    clicks: number
    directConversions: number
    impressions: number
    avgBidPerClick: Decimal | DecimalJsLike | number | string
    avgImpressionPosition: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectDailyPhraseStatUpdateWithoutImportBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    statDate?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
    campaignName?: StringFieldUpdateOperationsInput | string
    adGroupId?: StringFieldUpdateOperationsInput | string
    adGroupName?: StringFieldUpdateOperationsInput | string
    criteriaType?: StringFieldUpdateOperationsInput | string
    keywordText?: StringFieldUpdateOperationsInput | string
    targetRegionName?: StringFieldUpdateOperationsInput | string
    targetRegionId?: StringFieldUpdateOperationsInput | string
    deviceType?: StringFieldUpdateOperationsInput | string
    spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clicks?: IntFieldUpdateOperationsInput | number
    directConversions?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    avgBidPerClick?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgImpressionPosition?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectDailyPhraseStatUncheckedUpdateWithoutImportBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    statDate?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
    campaignName?: StringFieldUpdateOperationsInput | string
    adGroupId?: StringFieldUpdateOperationsInput | string
    adGroupName?: StringFieldUpdateOperationsInput | string
    criteriaType?: StringFieldUpdateOperationsInput | string
    keywordText?: StringFieldUpdateOperationsInput | string
    targetRegionName?: StringFieldUpdateOperationsInput | string
    targetRegionId?: StringFieldUpdateOperationsInput | string
    deviceType?: StringFieldUpdateOperationsInput | string
    spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clicks?: IntFieldUpdateOperationsInput | number
    directConversions?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    avgBidPerClick?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgImpressionPosition?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectDailyPhraseStatUncheckedUpdateManyWithoutImportBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    statDate?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
    campaignName?: StringFieldUpdateOperationsInput | string
    adGroupId?: StringFieldUpdateOperationsInput | string
    adGroupName?: StringFieldUpdateOperationsInput | string
    criteriaType?: StringFieldUpdateOperationsInput | string
    keywordText?: StringFieldUpdateOperationsInput | string
    targetRegionName?: StringFieldUpdateOperationsInput | string
    targetRegionId?: StringFieldUpdateOperationsInput | string
    deviceType?: StringFieldUpdateOperationsInput | string
    spend?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clicks?: IntFieldUpdateOperationsInput | number
    directConversions?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    avgBidPerClick?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgImpressionPosition?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}