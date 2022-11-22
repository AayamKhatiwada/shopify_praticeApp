/// <reference types="node" />
import http from 'http';
import { RequestReturn } from '../clients/http_client/types';
export default function graphqlProxy(userReq: http.IncomingMessage, userRes: http.ServerResponse): Promise<RequestReturn>;
//# sourceMappingURL=graphql_proxy.d.ts.map