/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.23.603 on 2020-09-07 14:00:47.

export interface Page<T> extends Slice<T> {
    totalPages?: number;
    totalElements?: number;
}

export interface Slice<T> extends Streamable<T> {
    number?: number;
    size?: number;
    content?: T[];
    sort?: any;
    numberOfElements?: number;
    first?: boolean;
    last?: boolean;
    pageable?: Pageable;
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
    ipAddress?: string;
    loginUser?: User;
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
    unpaged?: boolean;
    pageNumber?: number;
    pageSize?: number;
}

export interface GrantedAuthority {
    authority?: string;
}

export interface UserDetails {
    enabled?: boolean;
    username?: string;
    password?: string;
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
