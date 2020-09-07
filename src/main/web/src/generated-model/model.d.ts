/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.23.603 on 2020-09-07 20:01:20.

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
    last?: boolean;
    pageable?: Pageable;
    numberOfElements?: number;
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

export interface Course {
    id?: number;
    title?: string;
    instructor?: Instructor;
    reviews?: Review[];
    students?: Student[];
}

export interface Instructor {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    instructorDetail?: InstructorDetail;
    course?: Course[];
}

export interface InstructorDetail {
    id?: number;
    youtubeChannel?: string;
    hobBy?: string;
    instructor?: Instructor;
}

export interface LoginHistory {
    id?: number;
    loginDateTime?: any;
    logoutDateTime?: any;
    ipAddress?: string;
    loginUser?: User;
}

export interface RequestHistory {
    id?: number;
    requestPath?: string;
    requestMethod?: string;
    requestDateTime?: any;
    requestBody?: string;
}

export interface Review {
    id?: number;
    comment?: string;
}

export interface Role {
    id?: number;
    name?: string;
    description?: string;
}

export interface Student {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    courses?: Course[];
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
    pageSize?: number;
    pageNumber?: number;
    unpaged?: boolean;
}

export interface GrantedAuthority {
    authority?: string;
}

export interface UserDetails {
    enabled?: boolean;
    username?: string;
    password?: string;
    accountNonLocked?: boolean;
    authorities?: GrantedAuthority[];
    accountNonExpired?: boolean;
    credentialsNonExpired?: boolean;
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
