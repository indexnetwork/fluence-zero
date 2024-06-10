/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.13.0
 * @fluencelabs/aqua-to-js version: 0.3.13
 * If you find any bugs in generated AIR, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * If you find any bugs in generated JS/TS, please write an issue on GitHub: https://github.com/fluencelabs/js-client/issues
 *
 */
import type { IFluenceClient as IFluenceClient$$, ParticleContext as ParticleContext$$ } from '@fluencelabs/js-client';

// Making aliases to reduce chance of accidental name collision
import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$
} from '@fluencelabs/js-client';


// Functions
export const createVector_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "values") [] -values-arg-)
   )
   (call %init_peer_id% ("cc4a9e15-0f50-48d1-99fb-6bb57d44c666" "call_create_vector") [-values-arg-] ret)
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type CreateVectorParams = [values: number[], config?: {ttl?: number}] | [peer: IFluenceClient$$, values: number[], config?: {ttl?: number}];

export type CreateVectorResult = Promise<string>;

export function createVector(...args: CreateVectorParams): CreateVectorResult {
    return callFunction$$(
        args,
        {
    "functionName": "createVector",
    "arrow": {
        "domain": {
            "fields": {
                "values": {
                    "type": {
                        "name": "f64",
                        "tag": "scalar"
                    },
                    "tag": "array"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "string",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        createVector_script
    );
}

export const helloWorldRemote_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "name") [] -name-arg-)
   )
   (xor
    (seq
     (seq
      (call -relay- ("op" "concat_strings") ["Hello, " -name-arg-] ret)
      (call -relay- ("op" "concat_strings") [ret "! From "] ret-0)
     )
     (call -relay- ("op" "concat_strings") [ret-0 -relay-] ret-1)
    )
    (fail :error:)
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret-1])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type HelloWorldRemoteParams = [name: string, config?: {ttl?: number}] | [peer: IFluenceClient$$, name: string, config?: {ttl?: number}];

export type HelloWorldRemoteResult = Promise<string>;

export function helloWorldRemote(...args: HelloWorldRemoteParams): HelloWorldRemoteResult {
    return callFunction$$(
        args,
        {
    "functionName": "helloWorldRemote",
    "arrow": {
        "domain": {
            "fields": {
                "name": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "string",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        helloWorldRemote_script
    );
}

export const showSubnet_script = `
(xor
 (new $services
  (seq
   (seq
    (seq
     (seq
      (seq
       (seq
        (seq
         (seq
          (seq
           (seq
            (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
            (par
             (par
              (par
               (par
                (new $option-inline
                 (seq
                  (xor
                   (seq
                    (new %MyDeployment_obj_map
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (ap ("chainNetworkId" 2358716091832359) %MyDeployment_obj_map)
                          (ap ("dealId" "2cd0091c6a04613386af1966aea8183c1070171b") %MyDeployment_obj_map)
                         )
                         (ap ("dealIdOriginal" "0x2cD0091c6a04613386af1966aea8183C1070171B") %MyDeployment_obj_map)
                        )
                        (ap ("definition" "bafkreihwjgur2lhrlho54ioamyzyqe7qxnkl4r7eyhvupkpnlsnrv4jqfq") %MyDeployment_obj_map)
                       )
                       (ap ("timestamp" "2024-05-31T11:16:30.226Z") %MyDeployment_obj_map)
                      )
                      (canon %init_peer_id% %MyDeployment_obj_map  MyDeployment_obj)
                     )
                    )
                    (ap MyDeployment_obj $option-inline)
                   )
                   (null)
                  )
                  (canon %init_peer_id% $option-inline  #option-inline-0)
                 )
                )
                (new $option-inline-1
                 (seq
                  (xor
                   (seq
                    (new %MyDeployment2_obj_map
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (seq
                           (ap ("chainNetworkId" 2358716091832359) %MyDeployment2_obj_map)
                           (ap ("dealId" "3d0276bd4e2370b56133ae9b3ebb5ed9ea0b9bed") %MyDeployment2_obj_map)
                          )
                          (ap ("dealIdOriginal" "0x3d0276bD4e2370B56133AE9B3Ebb5ed9ea0b9BED") %MyDeployment2_obj_map)
                         )
                         (ap ("definition" "bafkreihwjgur2lhrlho54ioamyzyqe7qxnkl4r7eyhvupkpnlsnrv4jqfq") %MyDeployment2_obj_map)
                        )
                        (ap ("matched" false) %MyDeployment2_obj_map)
                       )
                       (ap ("timestamp" "2024-05-31T11:26:59.551Z") %MyDeployment2_obj_map)
                      )
                      (canon %init_peer_id% %MyDeployment2_obj_map  MyDeployment2_obj)
                     )
                    )
                    (ap MyDeployment2_obj $option-inline-1)
                   )
                   (null)
                  )
                  (canon %init_peer_id% $option-inline-1  #option-inline-1-0)
                 )
                )
               )
               (new $option-inline-2
                (seq
                 (xor
                  (seq
                   (new %MyDeployment3_obj_map
                    (seq
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (ap ("chainNetworkId" 2358716091832359) %MyDeployment3_obj_map)
                          (ap ("dealId" "adeb03c7f210900a7f0521b73a013935c8943c6a") %MyDeployment3_obj_map)
                         )
                         (ap ("dealIdOriginal" "0xadeb03C7f210900A7f0521b73A013935C8943C6a") %MyDeployment3_obj_map)
                        )
                        (ap ("definition" "bafkreihwjgur2lhrlho54ioamyzyqe7qxnkl4r7eyhvupkpnlsnrv4jqfq") %MyDeployment3_obj_map)
                       )
                       (ap ("matched" true) %MyDeployment3_obj_map)
                      )
                      (ap ("timestamp" "2024-05-31T11:31:37.412Z") %MyDeployment3_obj_map)
                     )
                     (canon %init_peer_id% %MyDeployment3_obj_map  MyDeployment3_obj)
                    )
                   )
                   (ap MyDeployment3_obj $option-inline-2)
                  )
                  (null)
                 )
                 (canon %init_peer_id% $option-inline-2  #option-inline-2-0)
                )
               )
              )
              (new $option-inline-3
               (seq
                (xor
                 (seq
                  (new %MyDeployment4_obj_map
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (seq
                         (ap ("chainNetworkId" 2358716091832359) %MyDeployment4_obj_map)
                         (ap ("dealId" "124b5e53d21d36f8e3fd40e4dcc4ede49302443e") %MyDeployment4_obj_map)
                        )
                        (ap ("dealIdOriginal" "0x124b5E53D21D36F8E3FD40e4dCc4Ede49302443e") %MyDeployment4_obj_map)
                       )
                       (ap ("definition" "bafkreicpid3a3qtbru7gsn7246xekpyupw5qh7mmxktkucjlx4iuvth6tm") %MyDeployment4_obj_map)
                      )
                      (ap ("matched" true) %MyDeployment4_obj_map)
                     )
                     (ap ("timestamp" "2024-06-10T12:07:47.223Z") %MyDeployment4_obj_map)
                    )
                    (canon %init_peer_id% %MyDeployment4_obj_map  MyDeployment4_obj)
                   )
                  )
                  (ap MyDeployment4_obj $option-inline-3)
                 )
                 (null)
                )
                (canon %init_peer_id% $option-inline-3  #option-inline-3-0)
               )
              )
             )
             (new $option-inline-4
              (seq
               (xor
                (seq
                 (new %MyDeployment5_obj_map
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (ap ("chainNetworkId" 2358716091832359) %MyDeployment5_obj_map)
                        (ap ("dealId" "e948a13dc8728db0ab952f61f3e4c095697bcd65") %MyDeployment5_obj_map)
                       )
                       (ap ("dealIdOriginal" "0xE948A13dC8728dB0Ab952F61f3E4c095697bCd65") %MyDeployment5_obj_map)
                      )
                      (ap ("definition" "bafkreicpid3a3qtbru7gsn7246xekpyupw5qh7mmxktkucjlx4iuvth6tm") %MyDeployment5_obj_map)
                     )
                     (ap ("matched" true) %MyDeployment5_obj_map)
                    )
                    (ap ("timestamp" "2024-06-10T13:15:00.277Z") %MyDeployment5_obj_map)
                   )
                   (canon %init_peer_id% %MyDeployment5_obj_map  MyDeployment5_obj)
                  )
                 )
                 (ap MyDeployment5_obj $option-inline-4)
                )
                (null)
               )
               (canon %init_peer_id% $option-inline-4  #option-inline-4-0)
              )
             )
            )
           )
           (new %Deals_obj_map
            (seq
             (seq
              (seq
               (seq
                (seq
                 (ap ("myDeployment" #option-inline-0) %Deals_obj_map)
                 (ap ("myDeployment2" #option-inline-1-0) %Deals_obj_map)
                )
                (ap ("myDeployment3" #option-inline-2-0) %Deals_obj_map)
               )
               (ap ("myDeployment4" #option-inline-3-0) %Deals_obj_map)
              )
              (ap ("myDeployment5" #option-inline-4-0) %Deals_obj_map)
             )
             (canon %init_peer_id% %Deals_obj_map  Deals_obj)
            )
           )
          )
          (ap Deals_obj.$.myDeployment Deals_obj_flat)
         )
         (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
        )
        (xor
         (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
         (fail :error:)
        )
       )
       (new -if-error-
        (xor
         (seq
          (match ret.$.success false
           (seq
            (new $array-inline
             (seq
              (seq
               (ap "Failed to resolve subnet: " $array-inline)
               (ap ret.$.error $array-inline)
              )
              (canon %init_peer_id% $array-inline  #array-inline-0)
             )
            )
            (call %init_peer_id% ("run-console" "print") [#array-inline-0])
           )
          )
          (new $-hop-
           (new #-hopc-
            (canon -relay- $-hop-  #-hopc-)
           )
          )
         )
         (seq
          (seq
           (ap :error: -if-error-)
           (xor
            (seq
             (match :error:.$.error_code 10001
              (null)
             )
             (new $-hop-
              (new #-hopc-
               (canon -relay- $-hop-  #-hopc-)
              )
             )
            )
            (fail -if-error-)
           )
          )
          (new $-hop-
           (new #-hopc-
            (canon -relay- $-hop-  #-hopc-)
           )
          )
         )
        )
       )
      )
      (fold ret.$.workers w-0
       (seq
        (new -if-else-error-
         (new -else-error-
          (new -if-error-
           (xor
            (mismatch w-0.$.worker_id []
             (new $services_aliases
              (new $spells_aliases
               (xor
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (new $-hop-
                         (new #-hopc-
                          (canon -relay- $-hop-  #-hopc-)
                         )
                        )
                        (new $-hop-
                         (new #-hopc-
                          (canon w-0.$.host_id $-hop-  #-hopc-)
                         )
                        )
                       )
                       (call w-0.$.worker_id.[0] ("srv" "list") [] ret-0)
                      )
                      (fold ret-0 s-0
                       (seq
                        (seq
                         (seq
                          (seq
                           (ap s-0.$.aliases s-0_flat)
                           (ap s-0_flat s-0_flat_to_functor)
                          )
                          (ap s-0_flat_to_functor.length s-0_flat_length)
                         )
                         (new -if-error-
                          (xor
                           (mismatch s-0_flat_length 0
                            (seq
                             (new -if-error-
                              (xor
                               (match s-0.$.service_type "spell"
                                (ap s-0.$.aliases.[0] $spells_aliases)
                               )
                               (seq
                                (ap :error: -if-error-)
                                (xor
                                 (match :error:.$.error_code 10001
                                  (null)
                                 )
                                 (fail -if-error-)
                                )
                               )
                              )
                             )
                             (new -if-error-
                              (xor
                               (match s-0.$.service_type "service"
                                (ap s-0.$.aliases.[0] $services_aliases)
                               )
                               (seq
                                (ap :error: -if-error-)
                                (xor
                                 (match :error:.$.error_code 10001
                                  (null)
                                 )
                                 (fail -if-error-)
                                )
                               )
                              )
                             )
                            )
                           )
                           (seq
                            (ap :error: -if-error-)
                            (xor
                             (match :error:.$.error_code 10002
                              (null)
                             )
                             (fail -if-error-)
                            )
                           )
                          )
                         )
                        )
                        (next s-0)
                       )
                       (null)
                      )
                     )
                     (par
                      (new $option-inline-5
                       (seq
                        (xor
                         (seq
                          (canon w-0.$.worker_id.[0] $services_aliases  #push-to-stream-183)
                          (ap #push-to-stream-183 $option-inline-5)
                         )
                         (null)
                        )
                        (canon w-0.$.worker_id.[0] $option-inline-5  #option-inline-5-0)
                       )
                      )
                      (new $option-inline-6
                       (seq
                        (xor
                         (seq
                          (canon w-0.$.worker_id.[0] $spells_aliases  #push-to-stream-188)
                          (ap #push-to-stream-188 $option-inline-6)
                         )
                         (null)
                        )
                        (canon w-0.$.worker_id.[0] $option-inline-6  #option-inline-6-0)
                       )
                      )
                     )
                    )
                    (new %WorkerServices_obj_map
                     (seq
                      (seq
                       (seq
                        (seq
                         (ap ("host_id" w-0.$.host_id) %WorkerServices_obj_map)
                         (ap ("services" #option-inline-5-0) %WorkerServices_obj_map)
                        )
                        (ap ("spells" #option-inline-6-0) %WorkerServices_obj_map)
                       )
                       (ap ("worker_id" w-0.$.worker_id) %WorkerServices_obj_map)
                      )
                      (canon w-0.$.worker_id.[0] %WorkerServices_obj_map  WorkerServices_obj)
                     )
                    )
                   )
                   (ap WorkerServices_obj $services)
                  )
                  (new $-hop-
                   (new #-hopc-
                    (canon w-0.$.host_id $-hop-  #-hopc-)
                   )
                  )
                 )
                 (new $-hop-
                  (new #-hopc-
                   (canon -relay- $-hop-  #-hopc-)
                  )
                 )
                )
                (seq
                 (seq
                  (seq
                   (new $-hop-
                    (new #-hopc-
                     (canon w-0.$.host_id $-hop-  #-hopc-)
                    )
                   )
                   (new $-hop-
                    (new #-hopc-
                     (canon -relay- $-hop-  #-hopc-)
                    )
                   )
                  )
                  (new $-hop-
                   (new #-hopc-
                    (canon %init_peer_id% $-hop-  #-hopc-)
                   )
                  )
                 )
                 (fail :error:)
                )
               )
              )
             )
            )
            (seq
             (ap :error: -if-error-)
             (xor
              (match :error:.$.error_code 10002
               (seq
                (new %WorkerServices_obj-0_map
                 (seq
                  (seq
                   (seq
                    (seq
                     (ap ("host_id" w-0.$.host_id) %WorkerServices_obj-0_map)
                     (ap ("services" []) %WorkerServices_obj-0_map)
                    )
                    (ap ("spells" []) %WorkerServices_obj-0_map)
                   )
                   (ap ("worker_id" []) %WorkerServices_obj-0_map)
                  )
                  (canon %init_peer_id% %WorkerServices_obj-0_map  WorkerServices_obj-0)
                 )
                )
                (ap WorkerServices_obj-0 $services)
               )
              )
              (seq
               (seq
                (ap :error: -else-error-)
                (xor
                 (match :error:.$.error_code 10001
                  (ap -if-error- -if-else-error-)
                 )
                 (ap -else-error- -if-else-error-)
                )
               )
               (fail -if-else-error-)
              )
             )
            )
           )
          )
         )
        )
        (next w-0)
       )
       (null)
      )
     )
     (canon %init_peer_id% $services  #-services-fix-0)
    )
    (ap #-services-fix-0 -services-flat-0)
   )
   (call %init_peer_id% ("callbackSrv" "response") [-services-flat-0])
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type ShowSubnetParams = [config?: {ttl?: number}] | [peer: IFluenceClient$$, config?: {ttl?: number}];

export type ShowSubnetResult = Promise<{ host_id: string; services: string[] | null; spells: string[] | null; worker_id: string | null; }[]>;

export function showSubnet(...args: ShowSubnetParams): ShowSubnetResult {
    return callFunction$$(
        args,
        {
    "functionName": "showSubnet",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "WorkerServices",
                        "fields": {
                            "host_id": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "services": {
                                "type": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "tag": "option"
                            },
                            "spells": {
                                "type": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "tag": "option"
                            },
                            "worker_id": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "option"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        showSubnet_script
    );
}

export const getInfo_script = `
(xor
 (seq
  (seq
   (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
   (xor
    (call -relay- ("peer" "identify") [] ret)
    (fail :error:)
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret -relay-])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type GetInfoResultType = [{ node_version: string; spell_version: string; external_addresses: string[]; allowed_binaries: string[]; air_version: string; }, string]

export type GetInfoParams = [config?: {ttl?: number}] | [peer: IFluenceClient$$, config?: {ttl?: number}];

export type GetInfoResult = Promise<GetInfoResultType>;

export function getInfo(...args: GetInfoParams): GetInfoResult {
    return callFunction$$(
        args,
        {
    "functionName": "getInfo",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "Info",
                    "fields": {
                        "node_version": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "spell_version": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "external_addresses": {
                            "type": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "tag": "array"
                        },
                        "allowed_binaries": {
                            "type": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "tag": "array"
                        },
                        "air_version": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "struct"
                },
                {
                    "name": "string",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        getInfo_script
    );
}

export const runDeployedServices_script = `
(xor
 (new $answers
  (seq
   (seq
    (seq
     (seq
      (seq
       (seq
        (seq
         (seq
          (seq
           (seq
            (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
            (par
             (par
              (par
               (par
                (new $option-inline
                 (seq
                  (xor
                   (seq
                    (new %MyDeployment_obj_map
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (ap ("chainNetworkId" 2358716091832359) %MyDeployment_obj_map)
                          (ap ("dealId" "2cd0091c6a04613386af1966aea8183c1070171b") %MyDeployment_obj_map)
                         )
                         (ap ("dealIdOriginal" "0x2cD0091c6a04613386af1966aea8183C1070171B") %MyDeployment_obj_map)
                        )
                        (ap ("definition" "bafkreihwjgur2lhrlho54ioamyzyqe7qxnkl4r7eyhvupkpnlsnrv4jqfq") %MyDeployment_obj_map)
                       )
                       (ap ("timestamp" "2024-05-31T11:16:30.226Z") %MyDeployment_obj_map)
                      )
                      (canon %init_peer_id% %MyDeployment_obj_map  MyDeployment_obj)
                     )
                    )
                    (ap MyDeployment_obj $option-inline)
                   )
                   (null)
                  )
                  (canon %init_peer_id% $option-inline  #option-inline-0)
                 )
                )
                (new $option-inline-1
                 (seq
                  (xor
                   (seq
                    (new %MyDeployment2_obj_map
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (seq
                           (ap ("chainNetworkId" 2358716091832359) %MyDeployment2_obj_map)
                           (ap ("dealId" "3d0276bd4e2370b56133ae9b3ebb5ed9ea0b9bed") %MyDeployment2_obj_map)
                          )
                          (ap ("dealIdOriginal" "0x3d0276bD4e2370B56133AE9B3Ebb5ed9ea0b9BED") %MyDeployment2_obj_map)
                         )
                         (ap ("definition" "bafkreihwjgur2lhrlho54ioamyzyqe7qxnkl4r7eyhvupkpnlsnrv4jqfq") %MyDeployment2_obj_map)
                        )
                        (ap ("matched" false) %MyDeployment2_obj_map)
                       )
                       (ap ("timestamp" "2024-05-31T11:26:59.551Z") %MyDeployment2_obj_map)
                      )
                      (canon %init_peer_id% %MyDeployment2_obj_map  MyDeployment2_obj)
                     )
                    )
                    (ap MyDeployment2_obj $option-inline-1)
                   )
                   (null)
                  )
                  (canon %init_peer_id% $option-inline-1  #option-inline-1-0)
                 )
                )
               )
               (new $option-inline-2
                (seq
                 (xor
                  (seq
                   (new %MyDeployment3_obj_map
                    (seq
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (ap ("chainNetworkId" 2358716091832359) %MyDeployment3_obj_map)
                          (ap ("dealId" "adeb03c7f210900a7f0521b73a013935c8943c6a") %MyDeployment3_obj_map)
                         )
                         (ap ("dealIdOriginal" "0xadeb03C7f210900A7f0521b73A013935C8943C6a") %MyDeployment3_obj_map)
                        )
                        (ap ("definition" "bafkreihwjgur2lhrlho54ioamyzyqe7qxnkl4r7eyhvupkpnlsnrv4jqfq") %MyDeployment3_obj_map)
                       )
                       (ap ("matched" true) %MyDeployment3_obj_map)
                      )
                      (ap ("timestamp" "2024-05-31T11:31:37.412Z") %MyDeployment3_obj_map)
                     )
                     (canon %init_peer_id% %MyDeployment3_obj_map  MyDeployment3_obj)
                    )
                   )
                   (ap MyDeployment3_obj $option-inline-2)
                  )
                  (null)
                 )
                 (canon %init_peer_id% $option-inline-2  #option-inline-2-0)
                )
               )
              )
              (new $option-inline-3
               (seq
                (xor
                 (seq
                  (new %MyDeployment4_obj_map
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (seq
                         (ap ("chainNetworkId" 2358716091832359) %MyDeployment4_obj_map)
                         (ap ("dealId" "124b5e53d21d36f8e3fd40e4dcc4ede49302443e") %MyDeployment4_obj_map)
                        )
                        (ap ("dealIdOriginal" "0x124b5E53D21D36F8E3FD40e4dCc4Ede49302443e") %MyDeployment4_obj_map)
                       )
                       (ap ("definition" "bafkreicpid3a3qtbru7gsn7246xekpyupw5qh7mmxktkucjlx4iuvth6tm") %MyDeployment4_obj_map)
                      )
                      (ap ("matched" true) %MyDeployment4_obj_map)
                     )
                     (ap ("timestamp" "2024-06-10T12:07:47.223Z") %MyDeployment4_obj_map)
                    )
                    (canon %init_peer_id% %MyDeployment4_obj_map  MyDeployment4_obj)
                   )
                  )
                  (ap MyDeployment4_obj $option-inline-3)
                 )
                 (null)
                )
                (canon %init_peer_id% $option-inline-3  #option-inline-3-0)
               )
              )
             )
             (new $option-inline-4
              (seq
               (xor
                (seq
                 (new %MyDeployment5_obj_map
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (ap ("chainNetworkId" 2358716091832359) %MyDeployment5_obj_map)
                        (ap ("dealId" "e948a13dc8728db0ab952f61f3e4c095697bcd65") %MyDeployment5_obj_map)
                       )
                       (ap ("dealIdOriginal" "0xE948A13dC8728dB0Ab952F61f3E4c095697bCd65") %MyDeployment5_obj_map)
                      )
                      (ap ("definition" "bafkreicpid3a3qtbru7gsn7246xekpyupw5qh7mmxktkucjlx4iuvth6tm") %MyDeployment5_obj_map)
                     )
                     (ap ("matched" true) %MyDeployment5_obj_map)
                    )
                    (ap ("timestamp" "2024-06-10T13:15:00.277Z") %MyDeployment5_obj_map)
                   )
                   (canon %init_peer_id% %MyDeployment5_obj_map  MyDeployment5_obj)
                  )
                 )
                 (ap MyDeployment5_obj $option-inline-4)
                )
                (null)
               )
               (canon %init_peer_id% $option-inline-4  #option-inline-4-0)
              )
             )
            )
           )
           (new %Deals_obj_map
            (seq
             (seq
              (seq
               (seq
                (seq
                 (ap ("myDeployment" #option-inline-0) %Deals_obj_map)
                 (ap ("myDeployment2" #option-inline-1-0) %Deals_obj_map)
                )
                (ap ("myDeployment3" #option-inline-2-0) %Deals_obj_map)
               )
               (ap ("myDeployment4" #option-inline-3-0) %Deals_obj_map)
              )
              (ap ("myDeployment5" #option-inline-4-0) %Deals_obj_map)
             )
             (canon %init_peer_id% %Deals_obj_map  Deals_obj)
            )
           )
          )
          (ap Deals_obj.$.myDeployment Deals_obj_flat)
         )
         (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
        )
        (xor
         (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
         (fail :error:)
        )
       )
       (new -if-error-
        (xor
         (match ret.$.success false
          (seq
           (new $array-inline
            (seq
             (seq
              (ap "Failed to resolve subnet: " $array-inline)
              (ap ret.$.error $array-inline)
             )
             (canon %init_peer_id% $array-inline  #array-inline-0)
            )
           )
           (call %init_peer_id% ("run-console" "print") [#array-inline-0])
          )
         )
         (seq
          (ap :error: -if-error-)
          (xor
           (match :error:.$.error_code 10001
            (null)
           )
           (fail -if-error-)
          )
         )
        )
       )
      )
      (fold ret.$.workers w-0
       (seq
        (new -if-else-error-
         (new -else-error-
          (new -if-error-
           (xor
            (match w-0.$.worker_id []
             (seq
              (new %Answer_obj_map
               (seq
                (seq
                 (ap ("answer" []) %Answer_obj_map)
                 (ap ("worker" w-0) %Answer_obj_map)
                )
                (canon %init_peer_id% %Answer_obj_map  Answer_obj)
               )
              )
              (ap Answer_obj $answers)
             )
            )
            (seq
             (ap :error: -if-error-)
             (xor
              (match :error:.$.error_code 10001
               (xor
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (new $-hop-
                         (new #-hopc-
                          (canon -relay- $-hop-  #-hopc-)
                         )
                        )
                        (new $-hop-
                         (new #-hopc-
                          (canon w-0.$.host_id $-hop-  #-hopc-)
                         )
                        )
                       )
                       (new $array-inline-1
                        (seq
                         (seq
                          (seq
                           (ap 1.0 $array-inline-1)
                           (ap 2.0 $array-inline-1)
                          )
                          (ap 3.0 $array-inline-1)
                         )
                         (canon w-0.$.worker_id.[0] $array-inline-1  #array-inline-1-0)
                        )
                       )
                      )
                      (call w-0.$.worker_id.[0] ("myService" "call_create_vector") [#array-inline-1-0] ret-0)
                     )
                     (new $option-inline-5
                      (seq
                       (xor
                        (ap ret-0 $option-inline-5)
                        (null)
                       )
                       (canon w-0.$.worker_id.[0] $option-inline-5  #option-inline-5-0)
                      )
                     )
                    )
                    (new %Answer_obj-0_map
                     (seq
                      (seq
                       (ap ("answer" #option-inline-5-0) %Answer_obj-0_map)
                       (ap ("worker" w-0) %Answer_obj-0_map)
                      )
                      (canon w-0.$.worker_id.[0] %Answer_obj-0_map  Answer_obj-0)
                     )
                    )
                   )
                   (ap Answer_obj-0 $answers)
                  )
                  (new $-hop-
                   (new #-hopc-
                    (canon w-0.$.host_id $-hop-  #-hopc-)
                   )
                  )
                 )
                 (new $-hop-
                  (new #-hopc-
                   (canon -relay- $-hop-  #-hopc-)
                  )
                 )
                )
                (seq
                 (seq
                  (seq
                   (new $-hop-
                    (new #-hopc-
                     (canon w-0.$.host_id $-hop-  #-hopc-)
                    )
                   )
                   (new $-hop-
                    (new #-hopc-
                     (canon -relay- $-hop-  #-hopc-)
                    )
                   )
                  )
                  (new $-hop-
                   (new #-hopc-
                    (canon %init_peer_id% $-hop-  #-hopc-)
                   )
                  )
                 )
                 (fail :error:)
                )
               )
              )
              (seq
               (seq
                (ap :error: -else-error-)
                (xor
                 (match :error:.$.error_code 10001
                  (ap -if-error- -if-else-error-)
                 )
                 (ap -else-error- -if-else-error-)
                )
               )
               (fail -if-else-error-)
              )
             )
            )
           )
          )
         )
        )
        (next w-0)
       )
       (null)
      )
     )
     (canon %init_peer_id% $answers  #-answers-fix-0)
    )
    (ap #-answers-fix-0 -answers-flat-0)
   )
   (call %init_peer_id% ("callbackSrv" "response") [-answers-flat-0])
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type RunDeployedServicesParams = [config?: {ttl?: number}] | [peer: IFluenceClient$$, config?: {ttl?: number}];

export type RunDeployedServicesResult = Promise<{ answer: string | null; worker: { host_id: string; pat_id: string; worker_id: string | null; }; }[]>;

export function runDeployedServices(...args: RunDeployedServicesParams): RunDeployedServicesResult {
    return callFunction$$(
        args,
        {
    "functionName": "runDeployedServices",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "Answer",
                        "fields": {
                            "answer": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "option"
                            },
                            "worker": {
                                "name": "Worker",
                                "fields": {
                                    "host_id": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "pat_id": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "worker_id": {
                                        "type": {
                                            "name": "string",
                                            "tag": "scalar"
                                        },
                                        "tag": "option"
                                    }
                                },
                                "tag": "struct"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        runDeployedServices_script
    );
}

export const helloWorld_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "name") [] -name-arg-)
   )
   (call %init_peer_id% ("op" "concat_strings") ["Hello, " -name-arg-] ret)
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type HelloWorldParams = [name: string, config?: {ttl?: number}] | [peer: IFluenceClient$$, name: string, config?: {ttl?: number}];

export type HelloWorldResult = Promise<string>;

export function helloWorld(...args: HelloWorldParams): HelloWorldResult {
    return callFunction$$(
        args,
        {
    "functionName": "helloWorld",
    "arrow": {
        "domain": {
            "fields": {
                "name": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "string",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        helloWorld_script
    );
}

export const getInfos_script = `
(xor
 (new $infos
  (seq
   (seq
    (seq
     (seq
      (seq
       (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
       (call %init_peer_id% ("getDataSrv" "peers") [] -peers-arg-)
      )
      (fold -peers-arg- p-0
       (seq
        (xor
         (seq
          (seq
           (seq
            (new $-hop-
             (new #-hopc-
              (canon -relay- $-hop-  #-hopc-)
             )
            )
            (call p-0 ("peer" "identify") [] ret)
           )
           (ap ret $infos)
          )
          (new $-hop-
           (new #-hopc-
            (canon -relay- $-hop-  #-hopc-)
           )
          )
         )
         (seq
          (seq
           (new $-hop-
            (new #-hopc-
             (canon -relay- $-hop-  #-hopc-)
            )
           )
           (new $-hop-
            (new #-hopc-
             (canon %init_peer_id% $-hop-  #-hopc-)
            )
           )
          )
          (fail :error:)
         )
        )
        (next p-0)
       )
       (null)
      )
     )
     (canon %init_peer_id% $infos  #-infos-fix-0)
    )
    (ap #-infos-fix-0 -infos-flat-0)
   )
   (call %init_peer_id% ("callbackSrv" "response") [-infos-flat-0])
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type GetInfosParams = [peers: string[], config?: {ttl?: number}] | [peer: IFluenceClient$$, peers: string[], config?: {ttl?: number}];

export type GetInfosResult = Promise<{ node_version: string; spell_version: string; external_addresses: string[]; allowed_binaries: string[]; air_version: string; }[]>;

export function getInfos(...args: GetInfosParams): GetInfosResult {
    return callFunction$$(
        args,
        {
    "functionName": "getInfos",
    "arrow": {
        "domain": {
            "fields": {
                "peers": {
                    "type": {
                        "name": "string",
                        "tag": "scalar"
                    },
                    "tag": "array"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "Info",
                        "fields": {
                            "node_version": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "spell_version": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "external_addresses": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "array"
                            },
                            "allowed_binaries": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "array"
                            },
                            "air_version": {
                                "name": "string",
                                "tag": "scalar"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        getInfos_script
    );
}
