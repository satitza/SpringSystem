/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.23.603 on 2020-08-30 10:21:44.

export interface Page<T> extends Slice<T> {
    totalElements?: number;
    totalPages?: number;
}

export interface Slice<T> extends Streamable<T> {
    number?: number;
    size?: number;
    content?: T[];
    sort?: any;
    first?: boolean;
    numberOfElements?: number;
    pageable?: Pageable;
    last?: boolean;
}

export interface LoginRequest {
    username?: string;
    password?: string;
}

export interface Authority extends GrantedAuthority {
    id?: number;
    name?: string;
    description?: string;
}

export interface Role {
    id?: number;
    name?: string;
    description?: string;
}

export interface User extends UserDetails {
    id?: number;
    activated?: boolean;
    email?: string;
    firstName?: string;
    lastName?: string;
    roles?: Role[];
}

export interface Pageable {
    offset?: number;
    sort?: any;
    paged?: boolean;
    unpaged?: boolean;
    pageSize?: number;
    pageNumber?: number;
}

export interface GrantedAuthority {
    authority?: string;
}

export interface UserDetails {
    enabled?: boolean;
    password?: string;
    username?: string;
    accountNonExpired?: boolean;
    credentialsNonExpired?: boolean;
    authorities?: GrantedAuthority[];
    accountNonLocked?: boolean;
}

export interface Streamable<T> extends Supplier<Stream<T>> {
    empty?: boolean;
}

export interface Supplier<T> {
}

export interface Stream<T> extends BaseStream<T, Stream<T>> {
}

export interface BaseStream<T, S> extends AutoCloseable {
    parallel?: boolean;
}

export interface AutoCloseable {
}
