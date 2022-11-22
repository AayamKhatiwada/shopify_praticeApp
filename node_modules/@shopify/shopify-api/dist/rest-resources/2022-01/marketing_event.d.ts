/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
interface FindArgs {
    session: SessionInterface;
    id: number | string;
}
interface DeleteArgs {
    session: SessionInterface;
    id: number | string;
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    limit?: unknown;
    offset?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: SessionInterface;
}
interface EngagementsArgs {
    [key: string]: unknown;
    occurred_on?: unknown;
    impressions_count?: unknown;
    views_count?: unknown;
    clicks_count?: unknown;
    shares_count?: unknown;
    favorites_count?: unknown;
    comments_count?: unknown;
    ad_spend?: unknown;
    is_cumulative?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class MarketingEvent extends Base {
    static API_VERSION: ApiVersion;
    protected static NAME: string;
    protected static PLURAL_NAME: string;
    protected static HAS_ONE: {
        [key: string]: typeof Base;
    };
    protected static HAS_MANY: {
        [key: string]: typeof Base;
    };
    protected static PATHS: ResourcePath[];
    static find({ session, id }: FindArgs): Promise<MarketingEvent | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, limit, offset, ...otherArgs }: AllArgs): Promise<MarketingEvent[]>;
    static count({ session, ...otherArgs }: CountArgs): Promise<unknown>;
    engagements({ occurred_on, impressions_count, views_count, clicks_count, shares_count, favorites_count, comments_count, ad_spend, is_cumulative, body, ...otherArgs }: EngagementsArgs): Promise<unknown>;
    event_type: string | null;
    marketing_channel: string | null;
    paid: boolean | null;
    started_at: string | null;
    UTM_parameters: {
        [key: string]: unknown;
    } | null;
    budget: string | null;
    budget_type: string | null;
    currency: string | null;
    description: string | null;
    ended_at: string | null;
    id: number | null;
    manage_url: string | null;
    marketed_resources: {
        [key: string]: unknown;
    }[] | null;
    preview_url: string | null;
    referring_domain: string | null;
    remote_id: string | null;
    scheduled_to_end_at: string | null;
}
export {};
//# sourceMappingURL=marketing_event.d.ts.map