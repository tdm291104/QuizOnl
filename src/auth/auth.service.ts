import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(
      private usersService: UsersService,
      private jwtService: JwtService
      ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findUser(username, null);
        if (user && user.password === password) {
          const { password, takenQuizes, isactive, isadmin, ...result } = user;
          return result;
        }
        return null;
      }

    async login(user: any) {
      const payload = { username: user.username, sub: user.userId };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
}