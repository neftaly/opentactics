declare global {
	function require(name: string): any;
}

declare function gc() : void;

declare type timeout_handle = any;
declare function setTimeout(fn : (milliseconds: number) => void, timeout : number) : timeout_handle;
declare function clearTimeout(handle : timeout_handle) : void;
declare type interval_handle = any;
declare function setInterval(fn : (milliseconds: number) => void, delay : number) : interval_handle;
declare function clearInterval(handle : interval_handle) : void;

declare class UnrealEngineMulticastDelegate<T> {
	add(fn : T): void;
	remove(fn : T): void;
}

declare class UnrealEngineDelegate<T> {
	add(fn : T): void;
	remove(fn : T): void;
}

declare class Process {
	nextTick(fn : (number) => void): void;
}
declare var process : Process;

declare class Vector { 
	x: number;
	y: number;
	z: number;
	clone() : Vector;
}

declare class Rotator { 
	pitch: number;
	yaw: number;
	roll: number;
	clone() : Rotator;
	getBaseRotationAndBaseOffsetInMeters(outBaseOffsetInMeters?: Vector): {outRotation: Rotator, outBaseOffsetInMeters: Vector};
	getBaseRotationAndPositionOffset(outPosOffset?: Vector): {outRot: Rotator, outPosOffset: Vector};
	getPose(devicePosition?: Vector,neckPosition?: Vector,bUseOrienationForPlayerCamera?: boolean,bUsePositionForPlayerCamera?: boolean,positionScale?: Vector): {deviceRotation: Rotator, devicePosition: Vector, neckPosition: Vector};
	setBaseRotation(): void;
	conv_RotatorToText(): string;
	conv_RotatorToString(): string;
	breakRotator(roll?: number,pitch?: number,yaw?: number): {roll: number, pitch: number, yaw: number};
	breakRotIntoAxes(x?: Vector,y?: Vector,z?: Vector): {x: Vector, y: Vector, z: Vector};
	composeRotators(b: Rotator): Rotator;
	conv_RotatorToVector(): Vector;
	equalEqual_RotatorRotator(b: Rotator,errorTolerance: number): boolean;
	getAxes(x?: Vector,y?: Vector,z?: Vector): {x: Vector, y: Vector, z: Vector};
	getForwardVector(): Vector;
	getRightVector(): Vector;
	getUpVector(): Vector;
	multiply_RotatorFloat(b: number): Rotator;
	multiply_RotatorInt(b: number): Rotator;
	negateRotator(): Rotator;
	normalizedDeltaRotator(b: Rotator): Rotator;
	notEqual_RotatorRotator(b: Rotator,errorTolerance: number): boolean;
	rInterpTo(target: Rotator,deltaTime: number,interpSpeed: number): Rotator;
	rInterpTo_Constant(target: Rotator,deltaTime: number,interpSpeed: number): Rotator;
	rLerp(b: Rotator,alpha: number,bShortestPath: boolean): Rotator;
	selectRotator(b: Rotator,bPickA: boolean): Rotator;
	isValidAIRotation(): boolean;
	getOrientationAndPosition(devicePosition?: Vector): {deviceRotation: Rotator, devicePosition: Vector};
	static getBaseRotationAndBaseOffsetInMeters(outRotation?: Rotator,outBaseOffsetInMeters?: Vector): {outRotation: Rotator, outBaseOffsetInMeters: Vector};
	static getBaseRotationAndPositionOffset(outRot?: Rotator,outPosOffset?: Vector): {outRot: Rotator, outPosOffset: Vector};
	static getPose(deviceRotation?: Rotator,devicePosition?: Vector,neckPosition?: Vector,bUseOrienationForPlayerCamera?: boolean,bUsePositionForPlayerCamera?: boolean,positionScale?: Vector): {deviceRotation: Rotator, devicePosition: Vector, neckPosition: Vector};
	static setBaseRotation(inBaseRotation: Rotator): void;
	static conv_RotatorToText(inRot: Rotator): string;
	static conv_RotatorToString(inRot: Rotator): string;
	static breakRotator(inRot: Rotator,roll?: number,pitch?: number,yaw?: number): {roll: number, pitch: number, yaw: number};
	static breakRotIntoAxes(inRot: Rotator,x?: Vector,y?: Vector,z?: Vector): {x: Vector, y: Vector, z: Vector};
	static composeRotators(a: Rotator,b: Rotator): Rotator;
	static conv_RotatorToVector(inRot: Rotator): Vector;
	static equalEqual_RotatorRotator(a: Rotator,b: Rotator,errorTolerance: number): boolean;
	static getAxes(a: Rotator,x?: Vector,y?: Vector,z?: Vector): {x: Vector, y: Vector, z: Vector};
	static getForwardVector(inRot: Rotator): Vector;
	static getRightVector(inRot: Rotator): Vector;
	static getUpVector(inRot: Rotator): Vector;
	static multiply_RotatorFloat(a: Rotator,b: number): Rotator;
	static multiply_RotatorInt(a: Rotator,b: number): Rotator;
	static negateRotator(a: Rotator): Rotator;
	static normalizedDeltaRotator(a: Rotator,b: Rotator): Rotator;
	static notEqual_RotatorRotator(a: Rotator,b: Rotator,errorTolerance: number): boolean;
	static rInterpTo(current: Rotator,target: Rotator,deltaTime: number,interpSpeed: number): Rotator;
	static rInterpTo_Constant(current: Rotator,target: Rotator,deltaTime: number,interpSpeed: number): Rotator;
	static rLerp(a: Rotator,b: Rotator,alpha: number,bShortestPath: boolean): Rotator;
	static selectRotator(a: Rotator,b: Rotator,bPickA: boolean): Rotator;
	static isValidAIRotation(rotation: Rotator): boolean;
	static getOrientationAndPosition(deviceRotation?: Rotator,devicePosition?: Vector): {deviceRotation: Rotator, devicePosition: Vector};
	static makeRotator(roll: number,pitch: number,yaw: number): Rotator;
	static randomRotator(bRoll: boolean): Rotator;
}

declare class JavascriptContext { 
	paths: string[];
	writeDTS(target: string,bIncludingTooltip: boolean,extraText: string): boolean;
	writeAliases(target: string): boolean;
	setContextId(name: string): void;
	runScript(script: string,bOutput: boolean): string;
	runFile(filename: string): void;
	requestV8GarbageCollection(): void;
	readScriptFile(filename: string): string;
	isDebugContext(): boolean;
	getScriptFileFullPath(filename: string): string;
	findPathFile(targetRootPath: string,targetFileName: string,outFiles?: string[]): {outFiles: string[]};
	destroyInspector(): void;
	createInspector(port: number): void;
}

declare class UnrealConsole { 
	static warn(message: string): void;
	static log(message: string): void;
	static info(message: string): void;
	static error(message: string): void;
	static debug(message: string): void;
}

declare class GameObject { 
	onEnterPlay: UnrealEngineDelegate<(UObject: GameObject) => void>;
	onDestroy: UnrealEngineDelegate<(UObject: GameObject) => void>;
	onTick: UnrealEngineDelegate<(UObject: GameObject, deltaTime: number) => void>;
	onGrab: UnrealEngineDelegate<(UObject: GameObject) => void>;
	onRelease: UnrealEngineDelegate<(UObject: GameObject) => void>;
	worldRotationToLocal(rotation: Rotator): Rotator;
	worldPositionToLocal(position: Vector): Vector;
	setScale(scale: Vector): void;
	setRotation(rotation: Rotator): void;
	setPosition(position: Vector): void;
	setName(name: string): void;
	setDescription(description: string): void;
	localRotationToWorld(rotation: Rotator): Rotator;
	localPositionToWorld(position: Vector): Vector;
	getScale(): Vector;
	getRotation(): Rotator;
	getPosition(): Vector;
	getName(): string;
	getId(): string;
	getDescription(): string;
}

declare class GlobalScriptingEvents { 
	onTick: UnrealEngineDelegate<(deltaTime: number) => void>;
}

declare class ScriptEnvironment { 
	javascriptContext: JavascriptContext;
	onTick: UnrealEngineDelegate<(deltaTime: number) => void>;
	writeTypings(path: string,includeTooltip: boolean): boolean;
	startDebugMode(port: number): void;
	remove(name: string): void;
	execFile(scriptPath: string): void;
	execCommand(command: string,logOutput: boolean): void;
}

declare var context : JavascriptContext;

declare var root : ScriptEnvironment;

declare var gameObject : GameObject;