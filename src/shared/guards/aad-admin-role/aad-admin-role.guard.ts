import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from 'src/shared/interface/user.interface';

@Injectable()
export class AadAdminRoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const role = this.reflector.get<Role[]>('role', context.getHandler());

    //  const request = context.switchToHttp().getRequest();
    // we use a hardcoded string to validate the user for sake of simplicity
    //  return request.headers?.authorization === 'valid_token';

    return true;
  }
}
